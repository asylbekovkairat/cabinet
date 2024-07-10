import { FC, useEffect, useMemo, useState } from 'react';
import { Modal } from 'antd';

import { useAdminPlan } from '~entities/spuz/admission-plan';

import {
  AttestatCandidate,
  AttestatCandidatesListView,
  useAttestatCandidates,
  useResetAttestatCandidates,
  useSetAttestatCandidates,
} from '~entities/spuz/attestat';
import { useCandidateFio, useSetCandidateFio } from '~entities/spuz/candidate';
import { useLearningId } from '~entities/spuz/learning-type';
import { usePaymentTypeId } from '~entities/spuz/payment-type';
import { useTourId } from '~entities/spuz/tour';
import { AttestatCandidatesFilterView } from '~features/spuz/attestat';
import { useUserInfo } from '~entities/shared/user';
import { Input } from '~shared/ui';

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
  const userInfo = useUserInfo();

  const setAttestatCandidates = useSetAttestatCandidates();
  const resetAttestatCandidates = useResetAttestatCandidates();
  const setFio = useSetCandidateFio();

  const [candidatesList, setCandidatesList] = useState(attestatCandidates);
  const [openModalId, setOpenModalId] = useState<OpenModalId | null>(null);
  const [deleteInfo, setDeleteInfo] = useState<null>(null);

  console.log('adminPlan', adminPlan);

  useEffect(() => {
    resetAttestatCandidates();

    console.log('adminPlan?.id_admission_plan', adminPlan?.id_admission_plan);

    if (adminPlan?.id_admission_plan && tourId && paymentTypeId && userInfo?.id_university) {
      setAttestatCandidates({
        id_admission_plan: adminPlan.id_admission_plan,
        id_bk: paymentTypeId,
        id_university: userInfo?.id_university,
        tour: tourId,
      });
    }

    return () => {
      resetAttestatCandidates();
    };
  }, [adminPlan, tourId, paymentTypeId, userInfo?.id_university, adminPlan?.id_admission_plan]);

  useEffect(() => {
    setCandidatesList(attestatCandidates);
  }, [attestatCandidates]);

  console.log('attestatCandidates', attestatCandidates);

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

    return () => {
      resetAttestatCandidates();
    };
  }, [fio]);

  const openDeleteModal = (deleteInfo: any) => {
    setDeleteInfo(deleteInfo);
    setOpenModalId(OpenModalId.deleteCandidate);
  };

  const closeModal = () => setOpenModalId(null);

  const onCandidateFioChange = (value: string) => {
    setFio({ fio: value });
  };

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
        <Input
          className="w-full"
          size="large"
          placeholder="Введите ФИО"
          onChange={({ target }) => onCandidateFioChange(target.value)}
        />
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
