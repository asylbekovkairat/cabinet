import { Button, Modal } from 'antd';
import { useEffect, useMemo, useState } from 'react';

import {
  AdmissionCommissionListView,
  AdmissionUser,
  useSetAdmissionCommissionList,
} from '~entities/spuz/admission-commission';
import { useAdmissionCommissionList } from '~entities/spuz/admission-commission';
import {
  AddAdmissionCommissionView,
  DeleteAdmissionCommissionView,
} from '~features/spuz/admissionCommision';
import { PlusIcon } from '~shared/ui';

enum OpenModalId {
  addEmployee = 'addEmployee',
  accessEmployee = 'accessEmployee',
  deleteAdmission = 'deleteAdmission',
  editAdmission = 'editAdmission',
}

export type DeleteInfo = Pick<AdmissionUser, 'fio_users_university' | 'id_users_university'>;

// TRANSLATE
export const AdmissionCommission = () => {
  const admissionCommissionList = useAdmissionCommissionList();

  const setAdmissionCommissionList = useSetAdmissionCommissionList();

  const [openModalId, setOpenModalId] = useState<OpenModalId | null>(null);
  const [deleteInfo, setDeleteInfo] = useState<DeleteInfo | null>(null);

  useEffect(() => {
    loadAdmissionCommissionList();
  }, []);

  const loadAdmissionCommissionList = () => setAdmissionCommissionList(138);

  const openAddAddmissionModal = () => setOpenModalId(OpenModalId.addEmployee);
  const openAccessAddmissionModal = () => setOpenModalId(OpenModalId.accessEmployee);

  const openDeleteModal = (deleteInfo: DeleteInfo) => {
    console.log('deleteInfo', deleteInfo);

    setOpenModalId(OpenModalId.deleteAdmission);
    setDeleteInfo(deleteInfo);
  };

  const closeModal = () => setOpenModalId(null);

  const renderActions = useMemo(() => {
    switch (openModalId) {
      case OpenModalId.addEmployee:
        return (
          <AddAdmissionCommissionView
            closeModal={closeModal}
            loadAdmissionCommissionList={loadAdmissionCommissionList}
          />
        );
      case OpenModalId.deleteAdmission:
        return (
          <DeleteAdmissionCommissionView
            deleteInfo={deleteInfo}
            closeModal={closeModal}
            loadAdmissionCommissionList={loadAdmissionCommissionList}
          />
        );
      default:
        break;
    }
  }, [openModalId]);

  return (
    <>
      <Modal open={Boolean(openModalId)} onCancel={closeModal} onOk={closeModal} footer={null}>
        {renderActions}
      </Modal>
      <section className="flex justify-center items-center gap-2">
        <Button
          className="flex items-center pr-5"
          icon={<PlusIcon />}
          type="primary"
          onClick={openAddAddmissionModal}
        >
          Добавить сотрудника
        </Button>
        <Button className="px-8" type="primary" onClick={openAccessAddmissionModal}>
          Доступ сотрудников
        </Button>
      </section>
      <AdmissionCommissionListView
        list={admissionCommissionList || []}
        onDelete={openDeleteModal}
        onEdit={() => console.log('edit')}
      />
    </>
  );
};
