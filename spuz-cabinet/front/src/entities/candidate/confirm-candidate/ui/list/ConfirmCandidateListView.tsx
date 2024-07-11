import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { FC, memo } from 'react';

import { ConfirmAbiturient } from '../../model';

interface ConfirmCandidateListViewProps extends TableProps {
  list: any[];
}

export const ConfirmCandidateListView: FC<ConfirmCandidateListViewProps> = memo(({ list }) => {
  const columns: TableColumnsType<ConfirmAbiturient> = [
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
      title: 'Подтвердить',
      dataIndex: 'Confirm_enrollee',
      align: 'center',
      render: () => <Button type="primary">Подтвердить</Button>,
    },
    {
      title: 'Телефон',
      dataIndex: 'telefon',
      align: 'center',
    },
  ];

  return <Table bordered columns={columns} dataSource={list} />;
});
