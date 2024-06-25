import { FC, useEffect } from 'react';
import { Button, Form } from 'antd';

import {
  RegionSelector,
  useRegionList,
  useSelectedRegion,
  useSetRegionList,
  useSetSelectedRegion,
} from '~entities/shared/region';

import { Input, useNotification } from '~shared/ui';
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

import { i18n, useTranslation } from '~shared/lib/i18n';

import { registerToSpuz } from '../api';

interface Props {
  openConfirmModal: () => void;
}

export const SpuzSelectForm: FC<Props> = ({ openConfirmModal }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const notification = useNotification();

  const spuzWatch = Form.useWatch('spuz', form);
  const regionWatch = Form.useWatch('region', form);
  const specializationWatch = Form.useWatch('specialization', form);
  const learningTypeWatch = Form.useWatch('learningType', form);

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
  }, [setRegions, setUserEnrolleOrt]);

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
    }
  }, [spuzWatch]);

  useEffect(() => {
    if (learningTypeWatch) {
      setSpecialities({ spuzId: spuzWatch, learningId: learningTypeWatch });
    }
  }, [learningTypeWatch]);

  useEffect(() => {
    if (specializationWatch) {
      setPaymentTypes(specializationWatch);
    }
  }, [specializationWatch]);

  useEffect(() => {
    form.resetFields([
      'placesAmount',
      'tour',
      'discipline',
      'learningType',
      'specialization',
      'paymentType',
    ]);
  }, [spuzWatch, regionWatch]);

  useEffect(() => {
    if (vacantPlaces) {
      form.setFieldsValue({ placesAmount: vacantPlaces[0].vakanziy });
    }

    if (tourByBk) {
      form.setFieldsValue({ tour: tourByBk?.[0]?.tour });
    }
  }, [vacantPlaces, tourByBk, paymentTypes]);

  useEffect(() => {
    if (paymentTypes) {
      setTourByBk(paymentTypes[0].id_bk);
      setVacantPlaces(paymentTypes[0].id_admission_plan);

      form.setFieldsValue({ discipline: paymentTypes?.[0].discipline });
    }
  }, [paymentTypes]);

  const onFinish = async ({ paymentTypes, tour }: any) => {
    const params = {
      NumberSert: abiturientInfo?.NumberAD,
      tour: tour,
      bk: paymentTypes,
      lang: i18n.language === 'ru' ? 1 : 2,
    };

    const response = await registerToSpuz(params);

    if (response.kol > 0) {
      notification.openNotification({
        message: response?.msg,
        type: 'warning',
      });
    } else {
      notification.openNotification({
        message: '',
        type: 'success',
      });

      openConfirmModal();
    }
  };

  const openRatingList = () => {
    const { paymentType } = form.getFieldsValue(['paymentType']);
    const { tour } = form.getFieldsValue(['tour']);

    window.open(
      `https://2020.edu.gov.kg/spuz/ranjir/report?p=${paymentType}&&t=${tour}`,
      '_blank',
      ''
    );
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
            key={selectedRegion}
            placeholder={t('cm:selectSpuz')}
            disabled={!selectedRegion}
            size="middle"
            spuzList={spuzes || []}
          />
        </Form.Item>
        <Form.Item name="learningType" label={t('cm:learnType')}>
          <LearningTypeSelector key={spuzWatch} learningTypes={learningTypes || []} />
        </Form.Item>
        <Form.Item name="specialization" label={t('cm:routes.specialty')}>
          <SpecialitySelector specialtitesList={specialtites || []} />
        </Form.Item>
        <Form.Item name="paymentType" label={t('cm:paymentType')}>
          <PaymentTypeSelector paymentTypes={paymentTypes || []} />
        </Form.Item>
        <Form.Item name="tour" label="Тур">
          <TourStageView tourStage={tourByBk?.[0]?.tour || 0} />
        </Form.Item>
        <Form.Item name="placesAmount" label={t('cm:vacantPlaces')}>
          <VacantPlacesView vacantPlaces={vacantPlaces?.[0].vakanziy || 0} />
        </Form.Item>
        <Form.Item name="discipline" label={t('cm:regProfDisc')}>
          <Input value={paymentTypes?.[0].discipline || ''} disabled />
        </Form.Item>
        <div className="flex justify-end items-center gap-3">
          <Button htmlType="submit" onClick={openRatingList}>
            {t('cm:regViewRanj')}
          </Button>
          <Button type="primary" htmlType="submit">
            Каттоо
          </Button>
        </div>
      </Form>
    </>
  );
};
