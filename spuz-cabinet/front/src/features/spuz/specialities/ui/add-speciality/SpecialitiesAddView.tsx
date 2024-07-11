import { FC, useEffect } from 'react';

import { Button, Form } from 'antd';

import { LearningTypeSelector, useSetLearningId } from '~entities/spuz/learning-type';
import { useLearningTypes, useSetLearningTypes } from '~entities/spuz/learning-type';
import {
  QualificationSelector,
  useQualifications,
  useSetQualifications,
} from '~entities/spuz/qualification';

import { Input, PlusIcon, SquarePlusIcon, useNotification } from '~shared/ui';

import { useUserInfo } from '~entities/shared/user';

import { addSpecialty } from '../../api';

interface SpecialitiesAddViewProps {
  loadSpecialitites: () => void;
}

const SpecialitiesAddView: FC<SpecialitiesAddViewProps> = ({ loadSpecialitites }) => {
  const [form] = Form.useForm();
  const notification = useNotification();

  const learningWatch = Form.useWatch('id_learning', form);

  const learningTypes = useLearningTypes();
  const qualifications = useQualifications();
  const userInfo = useUserInfo();

  const setLearningTypes = useSetLearningTypes();
  const setQualifications = useSetQualifications();
  const setLearningId = useSetLearningId();

  useEffect(() => {
    setLearningTypes();
    setQualifications();
  }, []);

  useEffect(() => {
    setLearningId(learningWatch);
  }, [learningWatch]);

  // TRANSLATE

  const onFinish = async (values: any) => {
    if (userInfo?.id_university) {
      const data = { ...values, id_university: userInfo?.id_university };

      const response = (await addSpecialty(data)) as { res: true };

      if (response.res) {
        notification.openNotification({
          message: 'success!',
          type: 'success',
        });

        form.resetFields();
        loadSpecialitites();
      }
    }
  };

  return (
    <>
      {notification.contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Форма обучения"
            name="id_learning"
            required
            rules={[{ required: true }]}
          >
            <LearningTypeSelector learningTypes={learningTypes || []} />
          </Form.Item>
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Шифр"
            name="specialty_cipher"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Специальность"
            name="specialty"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Специальность (на кыргызском)"
            name="specialty_kg"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full items-center justify-between sm:flex-col sm:gap-0">
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Отрасль"
            name="id_profession"
            required
            rules={[{ required: true }]}
          >
            <QualificationSelector qualifications={qualifications || []} />
          </Form.Item>
          <Button
            className="flex items-center justify-center"
            htmlType="submit"
            type="primary"
            icon={<SquarePlusIcon />}
          >
            Добавить специальность
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SpecialitiesAddView;
