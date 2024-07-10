import { useEffect } from 'react';

import { useUserInfo } from '~entities/shared/user';

import { useSetAdminPlan } from '~entities/spuz/admission-plan';

import {
  LearningTypeSelector,
  useLearningTypes,
  useSetLearningId,
  useSetLearningTypesR,
} from '~entities/spuz/learning-type';
import {
  PaymentTypeSelector,
  usePaymentTypeId,
  usePaymentTypes,
  useSetPaymentTypeId,
  useSetPaymentTypesR,
} from '~entities/spuz/payment-type';
import {
  SpecialitiesSelector,
  useSetSpecialitiesR,
  useSetSpecialityId,
  useSpecialities,
  useSpecialityId,
} from '~entities/spuz/specialities';
import { Tour, TourSelector, useSetTourId, useSetTours, useTours } from '~entities/spuz/tour';

const AttestatCandidatesFilterView = () => {
  const learningTypes = useLearningTypes();
  const specialities = useSpecialities();
  const paymentTypes = usePaymentTypes();
  const toursList = useTours();
  const specialtyId = useSpecialityId();
  const paymentTypeId = usePaymentTypeId();
  const userInfo = useUserInfo();

  const setLearningTypesR = useSetLearningTypesR();
  const setPaymentTypes = useSetPaymentTypesR();
  const setSpecialitiesR = useSetSpecialitiesR();
  const setLearningId = useSetLearningId();
  const setSpecialityId = useSetSpecialityId();
  const setToursList = useSetTours();
  const setPaymentTypeId = useSetPaymentTypeId();
  const setTourId = useSetTourId();
  const setAdminPlan = useSetAdminPlan();

  useEffect(() => {
    if (userInfo?.id_university) {
      setLearningTypesR({ id_university: userInfo?.id_university });
      setPaymentTypes();
    }
  }, []);

  useEffect(() => {
    if (specialtyId && paymentTypeId) {
      setAdminPlan({ id_specialty: specialtyId, id_bk: paymentTypeId });
    }
  }, [specialtyId, paymentTypeId]);

  const onLearningChange = (value: number) => {
    setLearningId(value);

    if (userInfo?.id_university) {
      setSpecialitiesR({ id_university: userInfo?.id_university, id_learning: value });
    }
  };

  const onSpecialityChange = (value: number) => {
    setSpecialityId({ id_specialty: value });
  };

  const onPaymentTypeChange = (value: number) => {
    setPaymentTypeId({ id_bk: value });
    setToursList({ id_bk: value });
  };

  const onToursListChange = (value: number) => {
    setTourId({ tour: value });
  };

  return (
    <>
      <LearningTypeSelector
        className="w-full"
        learningTypes={learningTypes || []}
        size="large"
        placeholder="Класс"
        onChange={onLearningChange}
        allowClear
      />
      <SpecialitiesSelector
        className="w-full"
        specialitiesList={specialities || []}
        size="large"
        placeholder="Специальность"
        allowClear
        onChange={onSpecialityChange}
      />
      <PaymentTypeSelector
        className="w-full"
        paymentTypes={paymentTypes || []}
        size="large"
        placeholder="Форма оплаты"
        onChange={onPaymentTypeChange}
      />
      <TourSelector
        className="w-full"
        toursList={toursList?.sort((a: Tour, b: Tour) => a.tour - b.tour) || []}
        onChange={onToursListChange}
        size="large"
      />
    </>
  );
};

export default AttestatCandidatesFilterView;
