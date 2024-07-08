import { FC, useEffect, useMemo, useState } from 'react';
import { Modal } from 'antd';

import { useAdminPlan } from '~entities/spuz/admission-plan';

import {
  AttestatCandidate,
  AttestatCandidatesListView,
  useAttestatCandidates,
  useSetAttestatCandidates,
} from '~entities/spuz/attestat';
import { useCandidateFio } from '~entities/spuz/candidate';
import { useLearningId } from '~entities/spuz/learning-type';
import { usePaymentTypeId } from '~entities/spuz/payment-type';
import { useTourId } from '~entities/spuz/tour';
import { AttestatCandidatesFilterView } from '~features/spuz/attestat';

enum OpenModalId {
  editCandidate = 'editCandidate',
  deleteCandidate = 'deleteCandidate',
}

interface AttestatProps {
  openAbitInfo: (info: AttestatCandidate) => void;
}

const Attestat: FC<AttestatProps> = ({ openAbitInfo }) => {
  const attestatCandidates = useAttestatCandidates();
  const learningId = useLearningId();
  const adminPlan = useAdminPlan();
  const tourId = useTourId();
  const paymentTypeId = usePaymentTypeId();
  const fio = useCandidateFio();

  const setAttestatCandidates = useSetAttestatCandidates();

  const [candidatesList, setCandidatesList] = useState(attestatCandidates);
  const [openModalId, setOpenModalId] = useState<OpenModalId | null>(null);
  const [deleteInfo, setDeleteInfo] = useState<null>(null);

  useEffect(() => {
    if (adminPlan?.id_admission_plan && tourId && paymentTypeId) {
      setAttestatCandidates({
        id_admission_plan: adminPlan.id_admission_plan,
        id_bk: paymentTypeId,
        id_university: 138,
        tour: tourId,
      });
    }
  }, [learningId, adminPlan, tourId, paymentTypeId]);

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

  const openDeleteModal = (deleteInfo: any) => {
    setDeleteInfo(deleteInfo);
    setOpenModalId(OpenModalId.deleteCandidate);
  };

  const closeModal = () => setOpenModalId(null);

  const renderActions = useMemo(() => {
    switch (openModalId) {
      case OpenModalId.editCandidate:
        return <></>;
      case OpenModalId.deleteCandidate:
        return <></>;
      default:
        break;
    }
  }, [openModalId]);

  return (
    <>
      <Modal open={Boolean(openModalId)} onCancel={closeModal} onOk={closeModal} footer={null}>
        {renderActions}
      </Modal>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
        <AttestatCandidatesFilterView />
      </div>
      <AttestatCandidatesListView
        list={candidatesList || []}
        onDelete={openDeleteModal}
        onEdit={openAbitInfo}
      />
    </>
  );
};

export default Attestat;
