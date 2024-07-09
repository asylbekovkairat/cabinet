import { useEffect } from 'react';
import { Form } from 'antd';

import { useSetAdmissionPlanList } from '~entities/spuz/admission-plan';

import {
  LearningTypeSelector,
  useLearningTypes,
  useSetLearningTypes,
} from '~entities/spuz/learning-type';
import { useUserInfo } from '~entities/shared/user';

export const AdmissionPlansFilterView = () => {
  const [form] = Form.useForm();

  const learningWatch = Form.useWatch('id_learning', form);
  const learningTypes = useLearningTypes();
  const userInfo = useUserInfo();

  const setLearningTypes = useSetLearningTypes();
  const setAdmissionPlansList = useSetAdmissionPlanList();

  useEffect(() => {
    setLearningTypes();
  }, []);

  useEffect(() => {
    if (learningWatch && userInfo?.id_university) {
      setAdmissionPlansList({ id_university: userInfo?.id_university, id_learning: learningWatch });
    }
  }, [learningWatch]);

  return (
    <Form form={form} layout="vertical">
      <Form.Item name="id_learning" label="Форма обучения" required>
        <LearningTypeSelector learningTypes={learningTypes || []} />
      </Form.Item>
    </Form>
  );
};
