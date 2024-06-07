import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useUser } from '~entities/shared/user';
import { ApiDirectionAddData, addDirection } from '~features/institution/direction/add/api';
import {
  Button,
  Form,
  Input,
  InputKy,
  Modal,
  Spin,
  SquarePlusIcon,
  useNotification,
} from '~shared/ui';

export interface iDirectionAddViewProps {
  refetchDirectionsList: any;
  facultyId: number;
}

export const DirectionAddView: FC<iDirectionAddViewProps> = ({
  refetchDirectionsList,
  facultyId,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const userInfo = useUser();
  const notification = useNotification();

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const handleAddModal = () => {
    setModal(!modal);
    form.resetFields();
    setLoading(false);
  };

  const onFinish = async (fieldsData: ApiDirectionAddData) => {
    if (!userInfo || !facultyId) {
      return null;
    }

    const data = {
      faculty_id: facultyId,
      direction_cipher: fieldsData.direction_cipher,
      direction_ky: fieldsData.direction_ky,
      direction_ru: fieldsData.direction_ru,
      direction_en: fieldsData.direction_en,
    };

    setLoading(true);

    const response = await addDirection(data);

    if (response?.data[0]?.id > 0) {
      notification.openNotification({
        message: t('notify.succesSaved'),
        type: 'success',
      });

      setLoading(false);
      setModal(false);
      refetchDirectionsList();
    }

    if (response?.data[0]?.id === null) {
      notification.openNotification({
        message: response.data[0]?.sms ?? response.message,
        type: 'warning',
      });

      setLoading(false);
    }

    if (response?.error) {
      notification.openNotification({
        message: response.message ?? t('notify.error'),
        type: 'error',
      });

      setLoading(false);
    }

    setLoading(false);
    handleAddModal();
  };

  const trimWhitespace = (data: any, value: string) => {
    const trimmedValue = value?.trimStart() || '';
    form.setFieldValue(`${data.field}`, trimmedValue);

    if (trimmedValue.length === 0) {
      return Promise.reject(t('notify.full'));
    }

    return Promise.resolve(trimmedValue);
  };

  const validateMessages = {
    required: t('notify.full'),
  };

  return (
    <>
      <Button
        onClick={handleAddModal}
        disabled={!facultyId}
        type="primary"
        className="flex gap-[6px] items-center px-2 stroke-white fill-white disabled:stroke-stroke disabled:fill-stroke disabled:border-transparent"
      >
        <SquarePlusIcon />
        {t('direction:add')}
      </Button>
      <Modal open={modal} footer={null} width={580} onCancel={handleAddModal} centered>
        <div className="p-[20px_30px] grid gap-6 sm:p-[30px_0] sm:gap-5">
          <p className="text-center text-[20px]">{t('direction:add')}</p>
          <Spin spinning={loading}>
            <Form
              autoComplete="off"
              onFinish={onFinish}
              validateMessages={validateMessages}
              form={form}
              className="grid gap-3.5"
            >
              <Form.Item
                name="direction_cipher"
                rules={[{ required: true, validator: trimWhitespace }]}
                className="m-0"
              >
                <Input
                  placeholder={t('direction:code') ?? ''}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Form.Item>
              <Form.Item
                name="direction_ky"
                rules={[{ required: true, validator: trimWhitespace }]}
                className="m-0"
              >
                <InputKy placeholder={t('direction:title_ky') ?? ''} />
              </Form.Item>
              <Form.Item
                name="direction_ru"
                rules={[{ required: true, validator: trimWhitespace }]}
                className="m-0"
              >
                <Input placeholder={t('direction:title_ru') ?? ''} />
              </Form.Item>
              <Form.Item
                name="direction_en"
                rules={[{ required: true, validator: trimWhitespace }]}
                className="m-0"
              >
                <Input placeholder={t('direction:title_en') ?? ''} />
              </Form.Item>
              <Button size="large" htmlType="submit" type="primary">
                {t('actions.save')}
              </Button>
            </Form>
          </Spin>
        </div>
      </Modal>
    </>
  );
};
