import { FC, memo } from 'react';

import { Button, Table, TableColumnsType } from 'antd';

import { EmployeeAccess } from '../../model';

interface EmployeesAccessListViewProps {
  list: EmployeeAccess[];
  onDelete: (id: number) => void;
}

export const EmployeesAccessListView: FC<EmployeesAccessListViewProps> = memo(
  ({ list, onDelete }) => {
    const columns: TableColumnsType<EmployeeAccess> = [
      {
        title: '№',
        dataIndex: 'id_specialty',
        align: 'start',
        render: (_value, _row, index) => {
          return index + 1;
        },
      },
      {
        title: 'Форма обучения',
        dataIndex: 'learning',
        align: 'start',
      },
      {
        title: 'Специальность',
        dataIndex: 'specialty',
        align: 'center',
      },
      {
        title: 'Форма оплаты',
        dataIndex: 'bk',
        align: 'center',
      },
      {
        title: 'Удалить',
        align: 'center',
        render: ({ id_users_university_access }) => (
          <Button onClick={() => onDelete(id_users_university_access)}>Удалить</Button>
        ),
      },
    ];

    return <Table bordered dataSource={list} columns={columns} />;
  }
);
