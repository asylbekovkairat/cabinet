import { Dispatch, FC, useEffect } from 'react';

import { Button, Form } from 'antd';

import { SetStateAction } from 'jotai';

import { EmployeeSelector, useEmployees, useSetEmployess } from '~entities/spuz/employee';

import { PlusIcon, useNotification } from '~shared/ui';

import {
  LearningTypeSelector,
  useLearningTypes,
  useSetLearningTypes,
} from '~entities/spuz/learning-type';
import {
  SpecialitiesSelector,
  useSetSpecialities,
  useSpecialities,
} from '~entities/spuz/specialities';

import {
  PaymentTypeSelector,
  usePaymentTypes,
  useSetPaymentTypes,
} from '~entities/spuz/payment-type';
import { useUserInfo } from '~entities/shared/user';

import { addEmployeeAccess } from '../../api';

interface AddAdmissionCommissionViewProps {
  loadEmployeesAccess: (id: number) => void;
  setEmployeeId: Dispatch<SetStateAction<number | null>>;
}

const AddEmployeessAccessView: FC<AddAdmissionCommissionViewProps> = ({
  loadEmployeesAccess,
  setEmployeeId,
}) => {
  const notification = useNotification();
  const [form] = Form.useForm();

  const employeeIdWatch = Form.useWatch('id_users_university', form);
  const learningIdWatch = Form.useWatch('learning_id', form);

  const employees = useEmployees();
  const learningTypes = useLearningTypes();
  const specialities = useSpecialities();
  const paymentTypes = usePaymentTypes();
  const userInfo = useUserInfo();

  const setEmployees = useSetEmployess();
  const setLearningTypes = useSetLearningTypes();
  const setSpecialities = useSetSpecialities();
  const setPaymentTypes = useSetPaymentTypes();

  useEffect(() => {
    if (userInfo?.id_university) {
      setEmployees(userInfo?.id_university);
      setLearningTypes();
      setPaymentTypes();
    }
  }, []);

  useEffect(() => {
    if (employeeIdWatch) {
      loadEmployeesAccess(employeeIdWatch);
      setEmployeeId(employeeIdWatch);
    }
  }, [employeeIdWatch]);

  useEffect(() => {
    if (learningIdWatch && userInfo?.id_university) {
      setSpecialities({ id_university: userInfo?.id_university, id_learning: learningIdWatch });
    }
  }, [learningIdWatch]);

  const onFInish = async (values: any) => {
    const response = (await addEmployeeAccess(values)) as { res: boolean };

    if (response.res) {
      loadEmployeesAccess(employeeIdWatch);

      notification.openNotification({
        message: 'success',
        type: 'success',
      });

      form.resetFields();
    }
  };

  return (
    <>
      {notification.contextHolder}
      <Form form={form} onFinish={onFInish} layout="vertical">
        <Form.Item name="id_users_university" label="ФИО сотрудника" required>
          <EmployeeSelector employeesList={employees || []} />
        </Form.Item>
        <Form.Item name="learning_id" label="Форма обучения" required>
          <LearningTypeSelector learningTypes={learningTypes || []} />
        </Form.Item>
        <Form.Item name="id_specialty" label="Специальность" required>
          <SpecialitiesSelector specialitiesList={specialities || []} />
        </Form.Item>
        <Form.Item name="id_bk" label="Форма оплаты" required>
          <PaymentTypeSelector paymentTypes={paymentTypes || []} />
        </Form.Item>
        <div className="flex justify-center mt-4 mb-8">
          <Button
            className="flex items-center"
            htmlType="submit"
            type="primary"
            icon={<PlusIcon />}
          >
            Добавить
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddEmployeessAccessView;
