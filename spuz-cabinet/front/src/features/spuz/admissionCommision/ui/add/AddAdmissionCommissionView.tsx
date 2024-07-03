import { FC } from 'react';

import { Button, Form, Input } from 'antd';

import MaskedInput from 'antd-mask-input';

import { SaveIcon, useNotification } from '~shared/ui';

import { addAdmissionCommissionUser } from '../../api';

interface AddAdmissionCommissionViewProps {
  closeModal: () => void;
  loadAdmissionCommissionList: () => void;
}

const AddAdmissionCommissionView: FC<AddAdmissionCommissionViewProps> = ({
  closeModal,
  loadAdmissionCommissionList,
}) => {
  const notification = useNotification();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const data = { ...values, id_university: 138 };

    const response = (await addAdmissionCommissionUser(data)) as { res: true };

    if (response.res) {
      form.resetFields();
      closeModal();

      notification.openNotification({
        message: 'success',
        type: 'success',
      });

      loadAdmissionCommissionList();
    }
  };

  return (
    <>
      {notification.contextHolder}
      <Form form={form} onFinish={onFinish} layout="vertical">
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
          <Form.Item className="w-full" name="official_phone" label="Официальный телефон" required>
            <MaskedInput className="w-full" mask="+996 (000) 000-000" />
          </Form.Item>
          <Form.Item className="w-full" name="mobile_phone" label="Мобильный телефон" required>
            <MaskedInput className="w-full" mask="+996 (000) 000-000" />
          </Form.Item>
        </div>
        <Form.Item name="whatsapp" label="WhatsApp" required>
          <Input />
        </Form.Item>
        <Form.Item name="telegram" label="Telegram" required>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" required>
          <Input />
        </Form.Item>
        <Form.Item name="instagram" label="Instagram" required>
          <Input />
        </Form.Item>
        <Form.Item name="facebook" label="Facebook" required>
          <Input />
        </Form.Item>
        <div className="flex justify-center">
          <Button
            className="px-8 flex items-center"
            htmlType="submit"
            type="primary"
            icon={<SaveIcon />}
          >
            Сохранить
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddAdmissionCommissionView;
