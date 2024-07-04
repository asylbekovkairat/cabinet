import { FC } from 'react';

import { Button } from 'antd';

import { useNotification } from '~shared/ui';

import { AdmissionUser } from '~entities/spuz/admission-commission';

import { deleteAdmissionCommissionUser } from '../../api';

interface DeleteAdmissionCommissionViewProps {
  deleteInfo: Pick<AdmissionUser, 'fio_users_university' | 'id_users_university'> | null;
  closeModal: () => void;
  loadAdmissionCommissionList: () => void;
}

const DeleteAdmissionCommissionView: FC<DeleteAdmissionCommissionViewProps> = ({
  deleteInfo,
  closeModal,
  loadAdmissionCommissionList,
}) => {
  const notification = useNotification();

  const onDeleteAdmission = async (id?: number) => {
    if (id) {
      const response = (await deleteAdmissionCommissionUser(id)) as { res: boolean };

      if (response.res) {
        notification.openNotification({
          message: 'success',
          type: 'success',
        });

        closeModal();
        loadAdmissionCommissionList();
      }
    }
  };

  return (
    <>
      {notification.contextHolder}
      <div className="flex flex-col gap-4">
        <p>Вы действительно хотите удалить сотрудника - "{deleteInfo?.fio_users_university}"?</p>
        <Button
          className="w-1/2 self-center"
          type="primary"
          onClick={() => onDeleteAdmission(deleteInfo?.id_users_university)}
        >
          Удалить
        </Button>
      </div>
    </>
  );
};

export default DeleteAdmissionCommissionView;
