import { FC } from 'react';

import { Button, Table, TableColumnsType } from 'antd';

import { DeleteButtonContainer, DeleteIcon, EditIcon } from '~shared/ui';

import { AdmissionUser } from '../../model';

interface AdmissionCommissionListViewProps {
  list: AdmissionUser[];
  onDelete: (deleteInfo: { fio_users_university: string; id_users_university: number }) => void;
  onEdit: (editInfo: AdmissionUser) => void;
}

const AdmissionCommissionListView: FC<AdmissionCommissionListViewProps> = ({
  list,
  onDelete,
  onEdit,
}) => {
  const columns: TableColumnsType<AdmissionUser> = [
    {
      title: '№',
      dataIndex: 'id_specialty',
      align: 'start',
      render: (_value, _row, index) => {
        return index + 1;
      },
    },
    {
      title: 'ФИО',
      width: '60%',
      dataIndex: 'fio_users_university',
      align: 'start',
    },
    {
      title: 'Логин',
      dataIndex: 'login_university',
      align: 'center',
    },
    {
      title: 'Изменить',
      align: 'center',
      render: (value, { fio_users_university, id_users_university }) => (
        <div className="flex gap-4 items-center justify-center">
          <Button type="primary" icon={<EditIcon />} onClick={() => onEdit(value)}></Button>
          <DeleteButtonContainer>
            <Button
              icon={<DeleteIcon />}
              onClick={() => onDelete({ fio_users_university, id_users_university })}
              type="primary"
            ></Button>
          </DeleteButtonContainer>
        </div>
      ),
    },
  ];

  return <Table bordered key="admissionCommissionListView" dataSource={list} columns={columns} />;
};

export default AdmissionCommissionListView;
