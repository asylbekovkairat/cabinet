import { Button, Form, Input } from 'antd';
import { FC, useEffect } from 'react';

import {
  LearningTypeSelector,
  useLearningTypes,
  useSetLearningId,
  useSetLearningTypes,
} from '~entities/spuz/learning-type';

import {
  QualificationSelector,
  useQualifications,
  useSetQualifications,
} from '~entities/spuz/qualification';

import { Speciality } from '~entities/spuz/specialities';

import { useNotification } from '~shared/ui';

import { editSpecialty } from '../../api';

interface SpecialitiesEditProps {
  loadSpecialitites: () => void;
  initialValues: Speciality;
  closeEditSpeciality: () => void;
}

const SpecialitiesEditView: FC<SpecialitiesEditProps> = ({
  loadSpecialitites,
  initialValues,
  closeEditSpeciality,
}) => {
  const [form] = Form.useForm();
  const notification = useNotification();

  const learningWatch = Form.useWatch('id_learning', form);

  const learningTypes = useLearningTypes();
  const qualifications = useQualifications();

  const setLearningTypes = useSetLearningTypes();
  const setQualifications = useSetQualifications();
  const setLearningId = useSetLearningId();

  useEffect(() => {
    setLearningTypes();
    setQualifications();
  }, []);

  useEffect(() => {
    form.setFieldsValue({ ...initialValues });
  }, [initialValues]);

  console.log('initialValues', initialValues);

  useEffect(() => {
    setLearningId(learningWatch);
  }, [learningWatch]);

  const onFinish = async (values: any) => {
    const data = { ...values, id_university: 138, id_specialty: initialValues.id_specialty };

    const response = (await editSpecialty(data)) as { res: boolean };
    console.log('response', response);

    if (response.res) {
      notification.openNotification({
        message: 'success!',
        type: 'success',
      });
    }

    form.resetFields();
    loadSpecialitites();
    closeEditSpeciality();
  };

  return (
    <>
      {notification.contextHolder}
      <Form form={form} initialValues={initialValues} layout="vertical" onFinish={onFinish}>
        <Form.Item className="w-full" label="Форма обучения" name="id_learning" required>
          <LearningTypeSelector learningTypes={learningTypes || []} />
        </Form.Item>
        <Form.Item className="w-full" label="Шифр" name="specialty_cipher" required>
          <Input />
        </Form.Item>

        <Form.Item className="w-full" label="Специальность" name="specialty" required>
          <Input />
        </Form.Item>
        <Form.Item
          className="w-full"
          label="Специальность (на кыргызском)"
          name="specialty_kg"
          required
        >
          <Input />
        </Form.Item>

        <Form.Item className="w-full" label="Отрасль" name="id_profession" required>
          <QualificationSelector qualifications={qualifications || []} />
        </Form.Item>

        <div className="flex justify-center">
          <Button htmlType="submit" type="primary">
            Изменить специальность
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SpecialitiesEditView;
