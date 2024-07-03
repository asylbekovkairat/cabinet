import { useEffect } from 'react';
import { Button, Checkbox, Form, InputNumber } from 'antd';

import { DisciplineSelector, useDisciplines, useSetDisciplines } from '~entities/spuz/discipline';

import {
  LearningTypeSelector,
  useLearningTypes,
  useSetLearningTypes,
} from '~entities/spuz/learning-type';
import {
  PaymentTypeSelector,
  usePaymentTypes,
  useSetPaymentTypes,
} from '~entities/spuz/payment-type';
import {
  SpecialitiesSelector,
  useSetSpecialities,
  useSpecialities,
} from '~entities/spuz/specialities';
import { SaveIcon, TextArea, useNotification } from '~shared/ui';

import { useAdmissionPlan, useSetAdmissionPlan } from '~entities/spuz/admission-plan';

import { addAdmissionPlan } from '../../api/api';

// TRANSLATE
const AdmissionPlanView = () => {
  const [form] = Form.useForm();
  const notification = useNotification();

  const learningId = Form.useWatch('id_learning', form);
  const specializationWatch = Form.useWatch('id_specialty', form);
  const paymentTypeWatch = Form.useWatch('id_bk', form);

  const learningTypes = useLearningTypes();
  const specialities = useSpecialities();
  const paymentTypes = usePaymentTypes();
  const disciplines = useDisciplines();
  const admissionPlan = useAdmissionPlan();

  const setLearningTypes = useSetLearningTypes();
  const setSpecialities = useSetSpecialities();
  const setPaymentTypes = useSetPaymentTypes();
  const setDisciplines = useSetDisciplines();
  const setAdmissionPlan = useSetAdmissionPlan();

  useEffect(() => {
    setLearningTypes();
  }, []);

  useEffect(() => {
    form.resetFields([
      'voucher_plan',
      'internal_test',
      'medicine',
      'id_specialty',
      'kol_plan',
      'smeta_doki',
      'smeta_education',
      'descriptions',
    ]);

    if (learningId) {
      setSpecialities({ id_university: 138, id_learning: learningId as unknown as number });
      setDisciplines(learningId);
    }
  }, [learningId]);

  useEffect(() => {
    form.resetFields([
      'voucher_plan',
      'internal_test',
      'medicine',
      'id_discipline',
      'kol_plan',
      'smeta_doki',
      'smeta_education',
      'descriptions',
    ]);

    if (specializationWatch) {
      setPaymentTypes(specializationWatch);
    }
  }, [specializationWatch]);

  useEffect(() => {
    if (specializationWatch && paymentTypeWatch) {
      setAdmissionPlan({ id_specialty: specializationWatch, id_bk: paymentTypeWatch });
    }
  }, [specializationWatch, paymentTypeWatch]);

  useEffect(() => {
    if (admissionPlan?.length) {
      form.setFieldsValue({ ...admissionPlan[0] });
    }
  }, [admissionPlan]);

  const onFinish = async (values: any) => {
    console.log('values', values);

    const data = {
      ...values,
      id_university: 138,
    };

    delete data?.id_learning;

    const response = (await addAdmissionPlan(data)) as {
      res: boolean;
      full_plan: number;
      diff: number;
    };

    console.log('res', response);

    if (response.res) {
      notification.openNotification({
        message: 'Вы сохранили новую запись!',
        type: 'success',
      });
    } else if (response.full_plan && response.diff) {
      notification.openNotification({
        message: `Общий план: ${response.full_plan} Превышение на: ${Math.abs(response.diff)}`,
        type: 'error',
      });
    } else {
      notification.openNotification({
        message: `Ошибка попробуйте позже!`,
        type: 'error',
      });
    }

    form.resetFields();
  };

  return (
    <>
      {notification.contextHolder}
      <Form
        form={form}
        layout="vertical"
        initialValues={{ ...admissionPlan?.[0] }}
        onFinish={onFinish}
      >
        <Form.Item label="Форма обучения" name="id_learning" required>
          <LearningTypeSelector learningTypes={learningTypes || []} />
        </Form.Item>
        <Form.Item label="Специальность" name="id_specialty" required>
          <SpecialitiesSelector specialitiesList={specialities || []} />
        </Form.Item>
        <Form.Item label="Форма оплаты" name="id_bk" required>
          <PaymentTypeSelector paymentTypes={paymentTypes || []} />
        </Form.Item>
        <section className="mt-12 border border-solid border-slate-700 rounded-md p-4">
          <div className="flex justify-between items-center">
            <Form.Item name="voucher_plan" valuePropName="checked">
              <Checkbox required>Ваучер</Checkbox>
            </Form.Item>
            <Form.Item name="internal_test" valuePropName="checked">
              <Checkbox>Внутреннее испытание</Checkbox>
            </Form.Item>
            <Form.Item name="medicine" valuePropName="checked">
              <Checkbox>Медицинский</Checkbox>
            </Form.Item>
          </div>

          <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
            <Form.Item
              className="w-full"
              label="Профилирующая дисциплина"
              name="id_discipline"
              required
            >
              <DisciplineSelector disciplines={disciplines || []} />
            </Form.Item>
            <Form.Item className="w-full" label="Количество плановых мест" name="kol_plan" required>
              <InputNumber className="w-full" />
            </Form.Item>
          </div>

          <div className="flex gap-5 w-full sm:flex-col sm:gap-0">
            <Form.Item
              className="w-full"
              label="Сумма за прием документов"
              name="smeta_doki"
              required
            >
              <InputNumber className="w-full" />
            </Form.Item>
            <Form.Item className="w-full" label="Сумма за обучение" name="smeta_education" required>
              <InputNumber className="w-full" />
            </Form.Item>
          </div>
          <Form.Item label="Описание" name="descriptions" required>
            <TextArea />
          </Form.Item>
        </section>
        <div className="flex justify-center mt-4">
          <Button
            className="px-8 flex items-center"
            type="primary"
            htmlType="submit"
            icon={<SaveIcon />}
          >
            Сохранить план
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AdmissionPlanView;
