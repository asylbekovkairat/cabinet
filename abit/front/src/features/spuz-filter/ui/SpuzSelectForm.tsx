import { useEffect } from 'react';
import { Form } from 'antd';

import { RegionSelector, useRegionList, useSetRegionList } from '~entities/shared/region';

import { Input, Select, TextArea } from '~shared/ui';

const SpuzSelectForm = () => {
  const [form] = Form.useForm();
  const regions = useRegionList();
  const setRegions = useSetRegionList();

  useEffect(() => {
    setRegions();
  }, []);

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Регион" required>
        <Select size="middle" />
      </Form.Item>
      <Form.Item label="СПУЗ" required>
        <Select size="middle" />
        <RegionSelector regionList={regions || []} />
      </Form.Item>
      <Form.Item label="Форма обучения">
        <Select size="middle" />
      </Form.Item>
      <Form.Item label="Специальность">
        <Select size="middle" />
      </Form.Item>
      <Form.Item label="Форма оплаты">
        <Select size="middle" />
      </Form.Item>
      <Form.Item label="Тур">
        <Input size="middle" />
      </Form.Item>
      <Form.Item label="Количество мест">
        <Input size="middle" />
      </Form.Item>
      <Form.Item label="Профилирующая дисциплина">
        <TextArea rows={2} size="middle" />
      </Form.Item>
    </Form>
  );
};

export default SpuzSelectForm;
