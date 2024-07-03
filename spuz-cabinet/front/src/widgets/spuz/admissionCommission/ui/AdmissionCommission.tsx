import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';

import {
  AdmissionCommissionListView,
  useSetAdmissionCommissionList,
} from '~entities/spuz/admission-commission';
import { useAdmissionCommissionList } from '~entities/spuz/admission-commission';
import AddAdmissionCommissionView from '~features/spuz/admissionCommision/ui/add/AddAdmissionCommissionView';

enum OpenModalId {
  addEmployee = 'addEmployee',
  accessEmployee = 'accessEmployee',
}

export const AdmissionCommission = () => {
  const [openModalId, setOpenModalId] = useState<OpenModalId | null>(null);
  const admissionCommissionList = useAdmissionCommissionList();

  const setAdmissionCommissionList = useSetAdmissionCommissionList();

  useEffect(() => {
    loadAdmissionCommissionList();
  }, []);

  const loadAdmissionCommissionList = () => setAdmissionCommissionList(138);

  const openAddAddmissionModal = () => setOpenModalId(OpenModalId.addEmployee);
  const openAccessAddmissionModal = () => setOpenModalId(OpenModalId.accessEmployee);
  const closeModal = () => setOpenModalId(null);

  return (
    <>
      <Modal
        open={openModalId === OpenModalId.addEmployee}
        onCancel={closeModal}
        onOk={closeModal}
        footer={null}
      >
        <AddAdmissionCommissionView
          closeModal={closeModal}
          loadAdmissionCommissionList={loadAdmissionCommissionList}
        />
      </Modal>
      <section className="flex justify-center items-center gap-2">
        <Button type="primary" onClick={openAddAddmissionModal}>
          Добавить сотрудника
        </Button>
        <Button type="primary" onClick={openAccessAddmissionModal}>
          Доступ сотрудников
        </Button>
      </section>
      <AdmissionCommissionListView
        list={admissionCommissionList || []}
        onDelete={() => console.log('delete')}
        onEdit={() => console.log('edit')}
      />
    </>
  );
};
