import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IDirection } from '~entities/institution/direction';
import { useUser } from '~entities/shared/user';
import { ApiDirectionEditData, editDirection } from '~features/institution/direction/edit/api';
import { Button, Form, Input, InputKy, Modal, PencilIcon, Spin, useNotification } from '~shared/ui';

export interface iDirectionEditViewProps {
  refetchDirectionsList: any;
  facultyId: number;
  direction: IDirection | null;
}

export const DirectionEditView: FC<iDirectionEditViewProps> = ({
  refetchDirectionsList,
  facultyId,
  direction,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const userInfo = useUser();
  const notification = useNotification();

  const [directionInitial, setDirectionInitial] = useState<any>();
  const [isFormChanged, setIsFormChanged] = useState(false);

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (direction && modal && facultyId) {
      const data = {
        id_direction: direction.id_direction,
        faculty_id: facultyId,
        direction_cipher: direction.direction_cipher,
        direction_ky: direction.direction_ky,
        direction_ru: direction.direction_ru,
        direction_en: direction.direction_en,
      };

      form.setFieldsValue(data);
      setDirectionInitial(data);
      setLoading(false);
    }
  }, [direction, modal]);

  const handleAddModal = () => {
    setModal(!modal);
    form.resetFields();
    setLoading(false);
  };

  const onFinish = async (fieldsData: ApiDirectionEditData) => {
    if (!userInfo || !facultyId || !direction) {
      return null;
    }

    const data = {
      id_direction: direction.id_direction,
      faculty_id: facultyId,
      direction_cipher: fieldsData.direction_cipher,
      direction_ky: fieldsData.direction_ky,
      direction_ru: fieldsData.direction_ru,
      direction_en: fieldsData.direction_en,
    };

    setLoading(true);

    const response = await editDirection(data);

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

  const onFormValuesChange = (_: any, values: any) => {
    if (!direction) {
      return null;
    }

    setIsFormChanged(
      Object.entries(values).some(([key, value]) => (directionInitial as any)[key] !== value)
    );
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
        type="primary"
        size="small"
        className="grid place-items-center"
        icon={<PencilIcon className="fill-white" />}
      />
      <Modal open={modal} footer={null} width={580} onCancel={handleAddModal} centered>
        <div className="p-[20px_30px] grid gap-6 sm:p-[30px_0] sm:gap-5">
          <p className="text-center text-[20px]">{t('direction:title')}</p>
          <Spin spinning={loading}>
            <Form
              autoComplete="off"
              onFinish={onFinish}
              onValuesChange={onFormValuesChange}
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
              <Button size="large" htmlType="submit" type="primary" disabled={!isFormChanged}>
                {t('actions.save')}
              </Button>
            </Form>
          </Spin>
        </div>
      </Modal>
    </>
  );
};
