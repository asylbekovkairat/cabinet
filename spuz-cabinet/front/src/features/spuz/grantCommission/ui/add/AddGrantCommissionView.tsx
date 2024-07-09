import { Dispatch, FC, useEffect } from 'react';

import { Button, Form, Input } from 'antd';
import { SetStateAction } from 'jotai';

import {
  CommissionPositionSelector,
  useCommissionPositions,
  useSetCommissionPositions,
} from '~entities/spuz/commission-position';
import { PlusIcon } from '~shared/ui';

import { useUserInfo } from '~entities/shared/user';

import { addGrantCommission } from '../../api';

interface AddAdmissionCommissionViewProps {
  setGrantId: Dispatch<SetStateAction<number | null>>;
  loadGrantCommissionList: (id_grant_position: number) => any;
}

export const AddGrantCommissionView: FC<AddAdmissionCommissionViewProps> = ({
  setGrantId,
  loadGrantCommissionList,
}) => {
  const [form] = Form.useForm();

  const positionWatch = Form.useWatch('id_grant_position', form);

  const commissionPositions = useCommissionPositions();
  const userInfo = useUserInfo();

  const setCommissionPositions = useSetCommissionPositions();

  useEffect(() => {
    setCommissionPositions();
  }, []);

  useEffect(() => {
    if (positionWatch) {
      setGrantId(positionWatch);
    }
  }, [positionWatch]);

  const onFinish = async (values: any) => {
    if (userInfo?.id_university) {
      const data = { ...values, id_university: userInfo?.id_university };

      const response = (await addGrantCommission(data)) as { res: boolean };

      if (response.res) {
        loadGrantCommissionList(positionWatch);
        form.resetFields(['grant_commission']);
      }
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
        <Form.Item className="w-1/2 sm:w-full" label="Коммиссия" name="id_grant_position" required>
          <CommissionPositionSelector commissionPositions={commissionPositions || []} />
        </Form.Item>
        <Form.Item className="w-1/2 sm:w-full" label="ФИО" name="grant_commission" required>
          <Input />
        </Form.Item>
      </div>

      <div className="flex justify-center mt-3 mb-5">
        <Button
          htmlType="submit"
          className="flex items-center pr-8 pl-6"
          icon={<PlusIcon />}
          type="primary"
        >
          Добавить сотрудника
        </Button>
      </div>
    </Form>
  );
};
