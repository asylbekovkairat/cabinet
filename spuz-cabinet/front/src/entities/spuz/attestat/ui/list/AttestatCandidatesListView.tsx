import { Table, TableColumnsType, TableProps } from 'antd';

import { FC, memo } from 'react';

import { DeleteIcon, EditIcon } from '~shared/ui';

import { AttestatCandidate } from '../../model';

interface AttestatCandidatesListViewProps extends TableProps {
  list: AttestatCandidate[];
  onDelete: (deleteInfo: AttestatCandidate) => void;
  onEdit: (info: AttestatCandidate) => void;
}

export const AttestatCandidatesListView: FC<AttestatCandidatesListViewProps> = memo(
  ({ list, onEdit, onDelete, ...restProps }) => {
    const columns: TableColumnsType<AttestatCandidate> = [
      {
        title: '№',
        dataIndex: 'id_specialty',
        align: 'center',
        key: 'id_abit',
        render: (_value, _row, index) => {
          return index + 1;
        },
      },
      {
        title: 'ФИО',
        width: '17%',
        dataIndex: 'fio',
        align: 'center',
        key: 'id_abit',
      },
      {
        title: 'ПИН',
        dataIndex: 'pin',
        align: 'center',
        key: 'id_abit',
      },
      {
        title: 'Дата рождения',
        dataIndex: 'birthdate',
        align: 'center',
        key: 'id_abit',
      },
      {
        title: 'Телефон',
        dataIndex: 'telefon',
        align: 'center',
        key: 'id_abit',
      },
      {
        title: 'Средний бал',
        dataIndex: 'srBall',
        align: 'center',
        key: 'id_abit',
      },
      {
        title: 'Проф.бал',
        dataIndex: 'ballDiscipline',
        align: 'center',
        key: 'id_abit',
      },
      {
        title: 'Внутр. испытание',
        dataIndex: 'internal_test',
        align: 'center',
        key: 'id_abit',

        render: (value) => <span>{value ? 1 : 0}</span>,
      },
      {
        title: 'Общий балл',
        dataIndex: 'summ',
        align: 'center',
        key: 'id_abit',
        render: (sum) => Math.abs(sum).toFixed(2),
        sorter: (a, b) => a.summ - b.summ,
      },
      {
        title: 'Дата регистрации',
        dataIndex: 'DateReg',
        align: 'center',
        key: 'id_abit',
      },
      {
        title: 'Данные',
        key: 'id_abit',
        align: 'center',
        render: (value) => (
          <div className="px-2 flex gap-3 items-center">
            <EditIcon className="cursor-pointer" onClick={() => onEdit(value)} />
            <DeleteIcon className="cursor-pointer" onClick={() => onDelete(value)} />
          </div>
        ),
      },
    ];

    return (
      <Table
        bordered
        key="attestatCandidatesListView"
        dataSource={list}
        columns={columns}
        sortDirections={['ascend', 'descend']}
        {...restProps}
      />
    );
  }
);
