import { FC, useEffect, useRef, useState } from 'react';
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
import { usePaymentTypeId } from '~entities/spuz/payment-type';
import { useTourId } from '~entities/spuz/tour';
import { useUserInfo } from '~entities/shared/user';

import { AttestatCandidatesFilterView } from '~features/spuz/attestat';
import { AttestatCandidatesToExcel } from '~features/spuz/attestat/ui/excel';
import { PrintButtonView } from '~features/shared/print';

import { Input } from '~shared/ui';

enum OpenModalId {
  deleteCandidate = 'deleteCandidate',
}

interface AttestatProps {
  openAbitInfo: (info: AttestatCandidate) => void;
}

const Attestat: FC<AttestatProps> = ({ openAbitInfo }) => {
  const tableRef = useRef<HTMLElement | null>(null);

  const attestatCandidates = useAttestatCandidates();
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

  useEffect(() => {
    resetAttestatCandidates();

    if (adminPlan?.id_admission_plan && tourId && paymentTypeId && userInfo?.id_university) {
      setAttestatCandidates({
        id_admission_plan: adminPlan.id_admission_plan,
        id_bk: paymentTypeId,
        id_university: userInfo?.id_university,
        tour: tourId,
      });
    }
  }, [adminPlan, tourId, paymentTypeId, userInfo?.id_university, adminPlan?.id_admission_plan]);

  useEffect(() => {
    setCandidatesList(attestatCandidates);
  }, [attestatCandidates]);

  useEffect(() => {
    if (fio) {
      const filteredNames = attestatCandidates?.filter((candidate) => {
        const lowerName = candidate.fio.toLowerCase();
        const lowerSearchTerm = fio.toLowerCase();

        return lowerName.includes(lowerSearchTerm);
      });

      if (filteredNames) {
        setCandidatesList(filteredNames);
      } else {
        setCandidatesList(attestatCandidates);
      }
    } else {
      setCandidatesList(attestatCandidates);
    }
  }, [fio]);

  const openDeleteModal = (deleteInfo: any) => {
    setDeleteInfo(deleteInfo);
    setOpenModalId(OpenModalId.deleteCandidate);
  };

  const closeModal = () => setOpenModalId(null);

  const onCandidateFioChange = (value: string) => {
    setFio({ fio: value });
  };

  const renderActions: Record<keyof typeof OpenModalId, JSX.Element> = {
    [OpenModalId.deleteCandidate]: <h1>Delete</h1>,
  };

  return (
    <>
      <Modal open={Boolean(openModalId)} onCancel={closeModal} onOk={closeModal} footer={null}>
        {renderActions[openModalId as OpenModalId]}
      </Modal>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 items-center">
        <AttestatCandidatesFilterView />
        <Input
          className="w-full"
          size="large"
          placeholder="Введите ФИО"
          onChange={({ target }) => onCandidateFioChange(target.value)}
        />
        {candidatesList?.length ? (
          <div className="flex items-center flex-row gap-5 justify-end">
            <AttestatCandidatesToExcel />
            <PrintButtonView tableName={`.${tableRef.current?.className}` || ''} />
          </div>
        ) : null}
      </div>
      <section className="table_print" ref={tableRef}>
        <AttestatCandidatesListView
          list={candidatesList || []}
          onDelete={openDeleteModal}
          onEdit={openAbitInfo}
        />
      </section>
    </>
  );
};

export default Attestat;
