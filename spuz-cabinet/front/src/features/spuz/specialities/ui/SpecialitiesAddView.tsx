import { useEffect } from 'react';

import { Button, Form } from 'antd';

import { LearningTypeSelector, useSetLearningId } from '~entities/spuz/learning-type';
import { useLearningTypes, useSetLearningTypes } from '~entities/spuz/learning-type';
import { QualificationSelector, useQualifications } from '~entities/spuz/qualification';

import { Input } from '~shared/ui';

const SpecialitiesAddView = () => {
  const [form] = Form.useForm();
  const learningWatch = Form.useWatch('id_learning', form);

  const learningTypes = useLearningTypes();
  const qualifications = useQualifications();

  const setLearningTypes = useSetLearningTypes();
  const setLearningId = useSetLearningId();

  useEffect(() => {
    setLearningTypes();
  }, []);

  useEffect(() => {
    setLearningId(learningWatch);
  }, [learningWatch]);

  // TRANSLATE
  return (
    <>
      <Form form={form} layout="vertical">
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item className="w-1/2 sm:w-full" label="Форма обучения" name="id_learning" required>
            <LearningTypeSelector learningTypes={learningTypes || []} />
          </Form.Item>
          <Form.Item className="w-1/2 sm:w-full" label="Шифр" name="specialty_cipher" required>
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item className="w-1/2 sm:w-full" label="Специальность" name="specialty" required>
            <Input />
          </Form.Item>
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Специальность (на кыргызском)"
            name="specialty_kg"
            required
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
          <Form.Item className="w-1/2 sm:w-full" label="Квалификация" name="id_profession" required>
            <QualificationSelector qualifications={qualifications || []} />
          </Form.Item>
          <Form.Item
            className="w-1/2 sm:w-full"
            label="Идентификатор в информационной системе СПУЗа"
            name="id_specialty_avn"
            required
          >
            <Input type="number" />
          </Form.Item>
        </div>
        <Button type="primary">Добавить</Button>
      </Form>
    </>
  );
};

export default SpecialitiesAddView;
