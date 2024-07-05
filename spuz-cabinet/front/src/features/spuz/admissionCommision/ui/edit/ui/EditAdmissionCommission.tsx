import { Button, Form, Input } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import { FC, useEffect } from 'react';

import { AdmissionUser } from '~entities/spuz/admission-commission';
import { updateAdmissionCommissionUser } from '~features/spuz/admissionCommision/api';
import { SaveIcon, useNotification } from '~shared/ui';

interface EditAdmissionCommissionViewProps {
  editInfo: AdmissionUser | null;
  closeModal: () => void;
  loadAdmissionCommissionList: () => void;
}

const EditAdmissionCommissionView: FC<EditAdmissionCommissionViewProps> = ({
  editInfo,
  closeModal,
  loadAdmissionCommissionList,
}) => {
  const notification = useNotification();
  const [form] = Form.useForm();

  useEffect(() => {
    if (editInfo) {
      form.setFieldsValue({ ...editInfo });
    }
  }, [editInfo]);

  const onFinish = async (values: AdmissionUser) => {
    const data = { ...values, id_users_university: editInfo?.id_users_university };

    const response = (await updateAdmissionCommissionUser(data as AdmissionUser)) as {
      res: boolean;
    };

    if (response.res) {
      notification.openNotification({
        message: 'success',
        type: 'success',
      });

      closeModal();
      loadAdmissionCommissionList();
    }
  };

  // TRANSLATE
  return (
    <>
      <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{ ...editInfo }}>
        <h1 className="text-center">Сотрудник</h1>
        <Form.Item name="fio_users_university" label="ФИО" required>
          <Input />
        </Form.Item>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item className="w-full" name="login_university" label="Логин" required>
            <Input />
          </Form.Item>
          <Form.Item className="w-full" name="password_university" label="Пароль" required>
            <Input.Password />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item className="w-full" name="mobile_phone" label="Мобильный телефон" required>
            <MaskedInput className="w-full" mask="+996 (000) 000-000" />
          </Form.Item>
          <Form.Item className="w-full" name="email" label="Email" required>
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item name="whatsapp" label="WhatsApp" required>
            <Input />
          </Form.Item>
          <Form.Item name="telegram" label="Telegram" required>
            <Input />
          </Form.Item>
        </div>

        <Form.Item name="instagram" label="Instagram" required>
          <Input />
        </Form.Item>
        <Form.Item name="facebook" label="Facebook" required>
          <Input />
        </Form.Item>
        <div className="flex justify-center mt-4">
          <Button
            className="px-8 flex items-center"
            htmlType="submit"
            type="primary"
            icon={<SaveIcon />}
          >
            Сохранить изменения
          </Button>
        </div>
      </Form>
    </>
  );
};

export default EditAdmissionCommissionView;
