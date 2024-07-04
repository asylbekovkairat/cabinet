import { FC, memo } from 'react';
import { Button, Table, TableColumnsType } from 'antd';

import { DeleteIcon } from '~shared/ui';

import { GrantCommission } from '../../model';

interface GrantCommissionListProps {
  list: GrantCommission[];
  onDelete: (id: number) => void;
}

export const GrantCommissionListView: FC<GrantCommissionListProps> = memo(({ list, onDelete }) => {
  const columns: TableColumnsType<GrantCommission> = [
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
      dataIndex: 'grant_commission',
      align: 'center',
    },
    {
      title: 'Удалить',
      align: 'center',
      dataIndex: 'id_grant_commission',
      render: (id_grant_commission) => (
        <Button
          className="flex items-center justify-center mx-auto"
          icon={<DeleteIcon />}
          onClick={() => onDelete(id_grant_commission)}
        >
          Удалить
        </Button>
      ),
    },
  ];

  return <Table bordered dataSource={list} columns={columns} />;
});
