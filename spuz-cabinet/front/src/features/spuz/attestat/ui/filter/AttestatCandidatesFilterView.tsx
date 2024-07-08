import { useEffect } from 'react';

import { useSetAdminPlan } from '~entities/spuz/admission-plan';

import { useSetCandidateFio } from '~entities/spuz/candidate';

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
import { Input } from '~shared/ui';

const AttestatCandidatesFilterView = () => {
  const learningTypes = useLearningTypes();
  const specialities = useSpecialities();
  const paymentTypes = usePaymentTypes();
  const toursList = useTours();
  const specialtyId = useSpecialityId();
  const paymentTypeId = usePaymentTypeId();

  const setLearningTypesR = useSetLearningTypesR();
  const setPaymentTypes = useSetPaymentTypesR();
  const setSpecialitiesR = useSetSpecialitiesR();
  const setLearningId = useSetLearningId();
  const setSpecialityId = useSetSpecialityId();
  const setToursList = useSetTours();
  const setPaymentTypeId = useSetPaymentTypeId();
  const setTourId = useSetTourId();
  const setFio = useSetCandidateFio();
  const setAdminPlan = useSetAdminPlan();

  useEffect(() => {
    setLearningTypesR({ id_university: 138 });
    setPaymentTypes();
  }, []);

  useEffect(() => {
    if (specialtyId && paymentTypeId) {
      setAdminPlan({ id_specialty: specialtyId, id_bk: paymentTypeId });
    }
  }, [specialtyId, paymentTypeId]);

  const onLearningChange = (value: number) => {
    setLearningId(value);

    setSpecialitiesR({ id_university: 138, id_learning: value });
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

  const onCandidateFioChange = (value: string) => {
    setFio({ fio: value });
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
      <Input
        className="w-full"
        size="large"
        placeholder="Введите ФИО"
        onChange={({ target }) => onCandidateFioChange(target.value)}
      />
    </>
  );
};

export default AttestatCandidatesFilterView;
