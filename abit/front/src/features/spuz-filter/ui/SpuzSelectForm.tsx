import { useEffect } from 'react';
import { Button, Form } from 'antd';

import {
  RegionSelector,
  useRegionList,
  useSelectedRegion,
  useSetRegionList,
  useSetSelectedRegion,
} from '~entities/shared/region';

import { Input, Select, TextArea, useNotification } from '~shared/ui';
import { SpuzSelector } from '~entities/spuz';
import { useSetSpuz, useSpuz } from '~entities/spuz/model';
import {
  LearningTypeSelector,
  useLearningType,
  useSetLearningType,
} from '~entities/shared/learning-type';
import {
  SpecialitySelector,
  useSetSpecialities,
  useSpecialities,
} from '~entities/shared/speciality';
import {
  PaymentTypeSelector,
  usePaymentTypes,
  useSetPaymentTypes,
} from '~entities/shared/payment-type';
import { TourStageView, useSetTourByBk, useTourByBk } from '~entities/tours';
import { VacantPlacesView, useSetVacantPlaces, useVacantPlaces } from '~entities/vacant';
import { useSetUserEnrolleOrt, useUserEnrollOrt } from '~entities/shared/user';
import { useAbiturientInfo, useSetAbiturientInfo } from '~entities/abiturient';

import { i18n } from '~shared/lib/i18n';

import { registerToSpuz } from '../api';

export const SpuzSelectForm = () => {
  const [form] = Form.useForm();
  const notification = useNotification();

  const spuzWatch = Form.useWatch('spuz', form);
  const specializationWatch = Form.useWatch('specialization', form);

  const regions = useRegionList();
  const spuzes = useSpuz();
  const selectedRegion = useSelectedRegion();
  const learningTypes = useLearningType();
  const specialtites = useSpecialities();
  const paymentTypes = usePaymentTypes();
  const tourByBk = useTourByBk();
  const vacantPlaces = useVacantPlaces();
  const userEnrolleOrt = useUserEnrollOrt();
  const abiturientInfo = useAbiturientInfo();

  const setRegions = useSetRegionList();
  const setSpuzes = useSetSpuz();
  const setSelectedRegion = useSetSelectedRegion();
  const setLearningTypes = useSetLearningType();
  const setSpecialities = useSetSpecialities();
  const setPaymentTypes = useSetPaymentTypes();
  const setTourByBk = useSetTourByBk();
  const setVacantPlaces = useSetVacantPlaces();
  const setAbiturientInfo = useSetAbiturientInfo();
  const setUserEnrolleOrt = useSetUserEnrolleOrt();

  useEffect(() => {
    setRegions();
    setUserEnrolleOrt();
  }, []);

  useEffect(() => {
    if (userEnrolleOrt?.id_enrollee_ORT) {
      setAbiturientInfo(userEnrolleOrt.id_enrollee_ORT);
    }
  }, [userEnrolleOrt]);

  useEffect(() => {
    if (selectedRegion) {
      setSpuzes(selectedRegion);
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (spuzWatch) {
      setLearningTypes(spuzWatch);
      setSpecialities({ spuzId: spuzWatch, learningId: 1 });
    }
  }, [spuzWatch]);

  useEffect(() => {
    if (specializationWatch) {
      setPaymentTypes(specializationWatch);
    }
  }, [specializationWatch]);

  useEffect(() => {
    if (paymentTypes) {
      setTourByBk(paymentTypes[0].id_bk);
      setVacantPlaces(paymentTypes[0].id_admission_plan);

      form.setFieldsValue({ discipline: paymentTypes?.[0].discipline });
    }
  }, [paymentTypes]);

  useEffect(() => {
    if (tourByBk) {
      form.setFieldsValue({ tour: tourByBk?.[0].tour });
    }
  }, [tourByBk]);

  useEffect(() => {
    if (vacantPlaces) {
      form.setFieldsValue({ placesAmount: vacantPlaces[0].vakanziy });
    }
  }, [vacantPlaces]);

  const onFinish = async (values: any) => {
    const params = {
      NumberSert: abiturientInfo?.NumberAD,
      tour: tourByBk?.[0].tour,
      bk: paymentTypes?.[0].id_bk,
      lang: i18n.language === 'ru' ? 1 : 2,
    };

    const response = await registerToSpuz(params);
    console.log('response', response);

    notification.openNotification({
      message: response?.msg,
      type: 'warning',
    });
  };

  return (
    <>
      {notification.contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="region" label="Регион" required>
          <RegionSelector
            size="middle"
            regionList={regions || []}
            value={selectedRegion}
            onChange={(id) => setSelectedRegion({ region: id })}
          />
        </Form.Item>
        <Form.Item name="spuz" label="СПУЗ" required>
          <SpuzSelector
            placeholder={!spuzes?.length ? 'Выберите регион' : 'Выберите СПУЗ'}
            disabled={!spuzes?.length}
            size="middle"
            spuzList={spuzes || []}
          />
        </Form.Item>
        <Form.Item name="learningType" label="Форма обучения">
          <LearningTypeSelector key={spuzWatch} learningTypes={learningTypes || []} />
        </Form.Item>
        <Form.Item name="specialization" label="Специальность">
          <SpecialitySelector specialtitesList={specialtites || []} />
        </Form.Item>
        <Form.Item name="paymentType" label="Форма оплаты">
          <PaymentTypeSelector paymentTypes={paymentTypes || []} />
        </Form.Item>
        <Form.Item name="tour" label="Тур">
          <TourStageView tourStage={tourByBk?.[0].tour || 0} />
        </Form.Item>
        <Form.Item name="placesAmount" label="Количество мест">
          <VacantPlacesView vacantPlaces={vacantPlaces?.[0].vakanziy || 0} />
        </Form.Item>
        <Form.Item name="discipline" label="Профилирующая дисциплина">
          <Input value={paymentTypes?.[0].discipline || ''} disabled />
        </Form.Item>
        <Button htmlType="submit">Save</Button>
      </Form>
    </>
  );
};
