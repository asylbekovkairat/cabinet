import { useEffect } from 'react';

import {
  ConfirmCandidateListView,
  useConfirmCandidates,
  useSetConfirmCandidates,
} from '~entities/candidate/confirm-candidate';

import { RanjirLinkTypes, RanjirLinkView } from '~entities/shared/ranjir';
import { useAdminPlan } from '~entities/spuz/admission-plan';
import { usePaymentTypeId } from '~entities/spuz/payment-type';
import { useSpecialityId } from '~entities/spuz/specialities';
import { useTourId } from '~entities/spuz/tour';

import { CandidatesFilterView } from '~features/spuz/candidate';

export const ConfirmCandidate = () => {
  const tourId = useTourId();
  const adminPlan = useAdminPlan();
  const paymentTypeId = usePaymentTypeId();
  const confirmCandidates = useConfirmCandidates();
  const speciality = useSpecialityId();

  const setConfirmCandidates = useSetConfirmCandidates();

  useEffect(() => {
    if (paymentTypeId && speciality && tourId) {
      setConfirmCandidates({ id_bk: paymentTypeId, id_specialty: speciality, tour: tourId });
    }
  }, [paymentTypeId, speciality, tourId]);

  return (
    <>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 items-center">
        <CandidatesFilterView />
      </div>
      <div className="flex gap-2 items-center mt-6">
        <RanjirLinkView type={RanjirLinkTypes.report} p={adminPlan?.id_admission_plan || 0} t={1} />
        <RanjirLinkView
          type={RanjirLinkTypes.confirm}
          p={adminPlan?.id_admission_plan || 0}
          t={1}
        />
        <RanjirLinkView
          type={RanjirLinkTypes.confirm_no}
          p={adminPlan?.id_admission_plan || 0}
          t={1}
        />
        <RanjirLinkView type={RanjirLinkTypes.svod} p={adminPlan?.id_admission_plan || 0} t={1} />
      </div>
      <ConfirmCandidateListView list={confirmCandidates || []} />
    </>
  );
};
