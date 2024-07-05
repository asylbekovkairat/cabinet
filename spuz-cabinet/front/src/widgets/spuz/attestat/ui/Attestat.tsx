import { useEffect, useState } from 'react';

import {
  AttestatCandidatesListView,
  useAttestatCandidates,
  useSetAttestatCandidates,
} from '~entities/spuz/attestat';
import { useCandidateFio } from '~entities/spuz/candidate';
import { useLearningId } from '~entities/spuz/learning-type';
import { usePaymentTypeId } from '~entities/spuz/payment-type';
import { useSpecialityId } from '~entities/spuz/specialities';
import { useTourId } from '~entities/spuz/tour';
import { AttestatCandidatesFilterView } from '~features/spuz/attestat';

const Attestat = () => {
  const attestatCandidates = useAttestatCandidates();
  const learningId = useLearningId();
  const specialityId = useSpecialityId();
  const tourId = useTourId();
  const paymentTypeId = usePaymentTypeId();
  const fio = useCandidateFio();

  const setAttestatCandidates = useSetAttestatCandidates();

  const [candidatesList, setCandidatesList] = useState(attestatCandidates);

  useEffect(() => {
    if (specialityId && tourId && paymentTypeId) {
      setAttestatCandidates({
        id_admission_plan: 3463,
        id_bk: 2,
        id_university: 138,
        tour: 1,
      });
    }
  }, [learningId, specialityId, tourId, paymentTypeId]);

  useEffect(() => {
    if (attestatCandidates) {
      setCandidatesList(attestatCandidates);
    }
  }, [attestatCandidates]);

  useEffect(() => {
    if (fio) {
      const filteredNames = candidatesList?.filter((candidate) => {
        const lowerName = candidate.fio.toLowerCase();
        const lowerSearchTerm = fio.toLowerCase();

        return lowerName.includes(lowerSearchTerm);
      });

      setCandidatesList(filteredNames || attestatCandidates);
    } else {
      setCandidatesList(attestatCandidates);
    }
  }, [fio]);

  return (
    <>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
        <AttestatCandidatesFilterView />
      </div>
      <AttestatCandidatesListView list={candidatesList || []} />
    </>
  );
};

export default Attestat;
