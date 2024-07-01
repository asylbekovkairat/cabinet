import { useEffect, useState } from 'react';

import { Button, Form, InputNumber } from 'antd';

import { Input, useNotification } from '~shared/ui';

import { Spuz, getSpuzInfo, updateSpuzInfo } from '../api';

export const GeneralInfoView = () => {
  const notification = useNotification();
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<Spuz | null>(null);

  useEffect(() => {
    loadSpuzInfo();
  }, []);

  useEffect(() => {
    if (formValues) {
      form.setFieldsValue({ ...formValues });
    }
  }, [formValues]);

  const loadSpuzInfo = async () => {
    const response = await getSpuzInfo(138);

    setFormValues(response as Spuz);
  };

  const onFinish = async (values: Spuz) => {
    const response = (await updateSpuzInfo(values)) as { res: boolean };

    if (response?.res) {
      notification.openNotification({ message: 'Success', type: 'success' });
    } else {
      notification.openNotification({ message: 'Failed', type: 'error' });
    }
  };

  // TRANSLATE
  return (
    <>
      {notification.contextHolder}
      <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{ ...formValues }}>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Полное название (на кыргызском)"
            name="university_name_kg"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Полное название (на русском)"
            name="university_name"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Краткое название (на кыргызском)"
            name="s_university_kg"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Краткое название (на русском)"
            name="s_university"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item className="w-1/2 sm:w-full" label="Адрес" name="university_address" required>
            <Input />
          </Form.Item>
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Адрес WEB-сайта"
            name="university_url"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Руководитель"
            name="university_supervisor"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Должность руководителя"
            name="supervisor_position"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item className="w-1/2 sm:w-full" label="Полезная площадь" name="area" required>
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            className="w-1/2 sm:w-full"
            label=" Общее кол-во студентов без учета выпускников"
            name="student"
            required
            rules={[{ required: true }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Общее кол-во ваучерных мест"
            name="voucher"
            required
            rules={[{ required: true }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item className="w-1/2 sm:w-full" label="Общий план набора" name="plan" required>
            <InputNumber className="w-full" />
          </Form.Item>
        </div>
        <div className="flex w-full justify-center">
          <Button htmlType="submit" type="primary">
            Сохранить
          </Button>
        </div>
      </Form>
    </>
  );
};
