import { FC } from 'react';
import { Button, Table, TableColumnsType, TableProps } from 'antd';

import { RecommendCandidate } from '../../model';

interface RecommendCandidateProps extends TableProps {
  list: RecommendCandidate[];
}

export const RecommendCandidateListView: FC<RecommendCandidateProps> = ({ list }) => {
  const columns: TableColumnsType<RecommendCandidate> = [
    {
      title: '№',
      dataIndex: 'id_specialty',
      align: 'start',
      render: (_value, _row, index) => {
        return index + 1;
      },
    },
    {
      title: 'Номер',
      dataIndex: 'NumberSert',
      align: 'center',
    },
    {
      title: 'ФИО',
      dataIndex: 'fio',
      align: 'center',
    },
    {
      title: 'Сред. балл аттестата',
      dataIndex: 'srBall',
      align: 'center',
    },
    {
      title: 'Балл проф. дисциплины',
      dataIndex: 'dop_ball',
      align: 'center',
    },
    {
      title: 'Балл внутр. испытаний',
      dataIndex: 'additional_tests_ball',
      align: 'center',
    },
    {
      title: 'Сумма баллов',
      dataIndex: 'summ',
      align: 'center',
    },
    {
      title: 'Дата регистрации',
      dataIndex: 'DateReg',
      align: 'center',
    },
    {
      title: 'Рекомендовать',
      dataIndex: 'DateReg',
      align: 'center',
      render: () => <Button type="primary">Рекомендовать</Button>,
    },
    {
      title: 'Льготник',
      dataIndex: 'DateReg',
      align: 'center',
      render: () => 'Рекомендовать',
    },
    {
      title: 'Телефон',
      dataIndex: 'telefon',
      align: 'center',
    },
  ];

  return <Table dataSource={list} columns={columns} />;
};
