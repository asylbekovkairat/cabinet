import { Button, Modal } from 'antd';

import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { useUserInfo } from '~entities/shared/user';

import {
  AdmissionCommissionListView,
  AdmissionUser,
  useSetAdmissionCommissionList,
} from '~entities/spuz/admission-commission';
import { useAdmissionCommissionList } from '~entities/spuz/admission-commission';
import {
  AddAdmissionCommissionView,
  DeleteAdmissionCommissionView,
  EditAdmissionCommissionView,
} from '~features/spuz/admissionCommision';
import { PlusIcon } from '~shared/ui';

enum OpenModalId {
  addEmployee = 'addEmployee',
  deleteAdmission = 'deleteAdmission',
  editAdmission = 'editAdmission',
}

export type DeleteInfo = Pick<AdmissionUser, 'fio_users_university' | 'id_users_university'>;

interface Props {
  openAccessEmployees: () => void;
}

// TRANSLATE
export const AdmissionCommission: FC<Props> = ({ openAccessEmployees }) => {
  const admissionCommissionList = useAdmissionCommissionList();
  const userInfo = useUserInfo();

  const setAdmissionCommissionList = useSetAdmissionCommissionList();

  const [openModalId, setOpenModalId] = useState<OpenModalId | null>(null);
  const [deleteInfo, setDeleteInfo] = useState<DeleteInfo | null>(null);
  const [editInfo, setEditInfo] = useState<AdmissionUser | null>(null);

  useEffect(() => {
    loadAdmissionCommissionList();
  }, []);

  const loadAdmissionCommissionList = () => {
    if (userInfo?.id_university) {
      setAdmissionCommissionList(userInfo?.id_university);
    }
  };

  const openAddAdmissionModal = () => setOpenModalId(OpenModalId.addEmployee);

  const openDeleteModal = (deleteInfo: DeleteInfo) => {
    setOpenModalId(OpenModalId.deleteAdmission);
    setDeleteInfo(deleteInfo);
  };

  const openEditModal = (editInfo: AdmissionUser) => {
    setEditInfo(editInfo);
    setOpenModalId(OpenModalId.editAdmission);
  };

  const closeModal = () => setOpenModalId(null);

  const renderActions: Record<keyof typeof OpenModalId, JSX.Element> = {
    [OpenModalId.addEmployee]: (
      <AddAdmissionCommissionView
        closeModal={closeModal}
        loadAdmissionCommissionList={loadAdmissionCommissionList}
      />
    ),
    [OpenModalId.deleteAdmission]: (
      <DeleteAdmissionCommissionView
        deleteInfo={deleteInfo}
        closeModal={closeModal}
        loadAdmissionCommissionList={loadAdmissionCommissionList}
      />
    ),
    [OpenModalId.editAdmission]: (
      <EditAdmissionCommissionView
        editInfo={editInfo}
        closeModal={closeModal}
        loadAdmissionCommissionList={loadAdmissionCommissionList}
      />
    ),
  };

  return (
    <>
      <Modal open={Boolean(openModalId)} onCancel={closeModal} onOk={closeModal} footer={null}>
        {renderActions[openModalId as OpenModalId]}
      </Modal>
      <section className="flex justify-center items-center gap-2">
        <Button
          className="flex items-center pr-5"
          icon={<PlusIcon />}
          type="primary"
          onClick={openAddAdmissionModal}
        >
          Добавить сотрудника
        </Button>
        <Button className="px-8" type="primary" onClick={openAccessEmployees}>
          Доступ сотрудников
        </Button>
      </section>
      <AdmissionCommissionListView
        list={admissionCommissionList || []}
        onDelete={openDeleteModal}
        onEdit={openEditModal}
      />
    </>
  );
};
