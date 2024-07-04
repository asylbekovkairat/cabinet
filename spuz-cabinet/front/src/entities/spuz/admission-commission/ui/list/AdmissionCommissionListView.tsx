import { FC } from 'react';

import { Button, Table, TableColumnsType } from 'antd';

import { DeleteIcon, EditIcon } from '~shared/ui';

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
      align: 'start',
    },
    {
      title: 'Изменить',
      align: 'start',
      render: (value, { fio_users_university, id_users_university }) => (
        <div className="flex gap-4 items-center">
          <Button
            className="flex items-center"
            type="primary"
            icon={<EditIcon />}
            onClick={() => onEdit(value)}
          >
            Изменить
          </Button>
          <Button
            className="flex items-center"
            icon={<DeleteIcon />}
            onClick={() => onDelete({ fio_users_university, id_users_university })}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];

  return <Table bordered key="admissionCommissionListView" dataSource={list} columns={columns} />;
};

export default AdmissionCommissionListView;
