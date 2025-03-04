import { useEffect } from 'react';

import {
  RecommendCandidateListView,
  useRecommendCandidates,
  useSetRecommendCandidates,
} from '~entities/candidate/recommend-candidate';

import { RanjirLinkTypes, RanjirLinkView } from '~entities/shared/ranjir';
import { useAdminPlan } from '~entities/spuz/admission-plan';

import { usePaymentTypeId } from '~entities/spuz/payment-type';

import { useSpecialityId } from '~entities/spuz/specialities';
import { useTourId } from '~entities/spuz/tour';

import { CandidatesFilterView } from '~features/spuz/candidate';

export const RecommendCandidate = () => {
  const tourId = useTourId();
  const adminPlan = useAdminPlan();
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
        <CandidatesFilterView />
        <p>Вакантных мест: {recommendCandidates?.[0].vakanziy || 0}</p>
      </div>
      <div className="flex gap-2 items-center mt-6">
        <RanjirLinkView type={RanjirLinkTypes.report} p={adminPlan?.id_admission_plan || 0} t={1} />
        <RanjirLinkView type={RanjirLinkTypes.recom} p={adminPlan?.id_admission_plan || 0} t={1} />
      </div>
      <RecommendCandidateListView list={recommendCandidates || []} />
    </>
  );
};
