import { Table, TableColumnsType } from 'antd';

import { FC, memo } from 'react';

import { Speciality } from '../../model';

interface SpecialitiesListProps {
  list: Speciality[];
}

export const SpecialitiesListView: FC<SpecialitiesListProps> = memo(({ list }) => {
  const columns: TableColumnsType<Speciality> = [
    {
      title: '№',
      dataIndex: 'id',
      align: 'start',
      render: (_value, _row, index) => {
        return index + 1;
      },
    },
    {
      title: 'Шифр',
      dataIndex: 'specialty_cipher',
      // key: 'id',
      align: 'start',
    },
    {
      title: 'Специальность',
      dataIndex: 'specialty',
      align: 'start',
    },
    {
      title: 'Специальность (на кыргызском)',
      dataIndex: 'specialty_kg',
      align: 'start',
    },
    {
      title: 'Квалификация',
      dataIndex: 'profession_ru',
      align: 'start',
    },
    {
      title: 'Actons',
    },
  ];

  console.log('list', list);

  return (
    <Table
      rowClassName="editable-row"
      key="specialitiesTableView"
      dataSource={list}
      columns={columns}
    />
  );
});
