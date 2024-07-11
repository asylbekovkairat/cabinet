import { Table, TableColumnsType, TableProps } from 'antd';
import { FC, memo } from 'react';

import { CandidateByPin } from '../../model';

interface CandidateByPinListViewProps extends TableProps {
  list: CandidateByPin[];
}

export const CandidateByPinListView: FC<CandidateByPinListViewProps> = memo(({ list }) => {
  const columns: TableColumnsType<CandidateByPin> = [
    {
      title: '№',
      dataIndex: 'id_specialty',
      align: 'start',
      render: (_value, _row, index) => {
        return index + 1;
      },
    },
    {
      title: 'ИНН',
      dataIndex: 'inn',
      align: 'center',
    },
    {
      title: 'ФИО',
      dataIndex: 'fio',
      align: 'center',
    },
    {
      title: 'Льгота',
      dataIndex: 'beneficiary',
      align: 'center',
    },
    {
      title: 'Паспорт',
      dataIndex: 'passport',
      align: 'center',
    },
    {
      title: 'Аттестат',
      dataIndex: 'attestat',
      align: 'center',
    },
    {
      title: 'Телефон',
      dataIndex: 'telefon',
      align: 'center',
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      align: 'center',
    },
    {
      title: 'Тур',
      dataIndex: 'tour',
      align: 'center',
    },
    {
      title: 'Специальность',
      dataIndex: 'spec',
      align: 'center',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      align: 'center',
    },
  ];

  return <Table dataSource={list} columns={columns} />;
});
