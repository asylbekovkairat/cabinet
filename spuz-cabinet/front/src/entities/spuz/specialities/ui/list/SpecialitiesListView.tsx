import { Table, TableColumnsType } from 'antd';

import { FC, memo } from 'react';

import { DeleteIcon, EditIcon } from '~shared/ui';

import { Speciality } from '../../model';

interface SpecialitiesListProps {
  list: Speciality[];
  onDelete: ({ specialty, id_specialty }: { specialty: string; id_specialty: number }) => void;
  onEdit: (data: any) => void;
}

// TRANSLATE
export const SpecialitiesListView: FC<SpecialitiesListProps> = memo(
  ({ list, onDelete, onEdit }) => {
    const columns: TableColumnsType<Speciality> = [
      {
        title: '№',
        dataIndex: 'id_specialty',
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
        title: 'Изменить',
        dataIndex: 'id_specialty',
        align: 'center',
        render: (value) => (
          <EditIcon className="cursor-pointer" onClick={() => onEdit(getSpecialityById(value))} />
        ),
      },
      {
        title: 'Удалить',
        align: 'center',
        render: ({ specialty, id_specialty }) => (
          <DeleteIcon
            className="cursor-pointer"
            onClick={() => onDelete({ specialty, id_specialty })}
          />
        ),
      },
    ];

    const getSpecialityById = (specId: number) => {
      const speciality = list.find((item) => item.id_specialty === specId);

      return { ...speciality, id_specialty: specId };
    };

    return (
      <Table
        rowClassName="editable-row"
        key="specialitiesTableView"
        dataSource={list}
        columns={columns}
      />
    );
  }
);
