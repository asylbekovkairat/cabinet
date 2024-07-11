import { useEffect } from 'react';

import { usePaymentTypeId } from '~entities/spuz/payment-type';
import {
  RecommendCandidateListView,
  useRecommendCandidates,
  useSetRecommendCandidates,
} from '~entities/spuz/recommend-candidate';
import { useSpecialityId } from '~entities/spuz/specialities';
import { useTourId } from '~entities/spuz/tour';

import { AttestatCandidatesFilterView } from '~features/spuz/attestat';

export const RecommendCandidate = () => {
  const tourId = useTourId();
  const paymentTypeId = usePaymentTypeId();
  const recommendCandidates = useRecommendCandidates();
  const speciality = useSpecialityId();

  const setRecommendCandidates = useSetRecommendCandidates();

  useEffect(() => {
    if (paymentTypeId && speciality && tourId) {
      setRecommendCandidates({ id_bk: paymentTypeId, id_specialty: speciality, tour: tourId });
    }
  }, [paymentTypeId, speciality, tourId]);

  return (
    <>
      <div className="grid grid-cols-3 gap-5 items-end sm:grid-cols-1 ">
        <AttestatCandidatesFilterView />
        <p>Вакантных мест: 50</p>
      </div>
      <RecommendCandidateListView list={recommendCandidates || []} />
    </>
  );
};
