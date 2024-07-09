import { FC } from 'react';
import { Table, TableColumnsType } from 'antd';

import { DefaultOptionType } from 'antd/es/select';

import { GradesSelector, useGrades } from '~entities/shared/grades';

import { AbiturientDiscipline } from '~entities/spuz/abiturient-discipline';

import { updateAbitDisciplineBall } from '../../api';

interface AbiturientDisciplinesViewProps {
  list: AbiturientDiscipline[];
  loadAbitDisciplines: () => void;
}

export const AbiturientDisciplinesView: FC<AbiturientDisciplinesViewProps> = ({
  list,
  loadAbitDisciplines,
}) => {
  const grades = useGrades();

  const handleChangeBall = async ({
    id_abit_discip,
    ball_new,
  }: {
    id_abit_discip: number;
    ball_new: number;
  }) => {
    const response = (await updateAbitDisciplineBall({
      id_abit_discip,
      ball_new,
    })) as { res: boolean };

    if (response.res) {
      loadAbitDisciplines();
    }
  };

  const columns: TableColumnsType<AbiturientDiscipline> = [
    {
      title: '№',
      align: 'start',
      render: (_value, _row, index) => {
        return index + 1;
      },
    },
    {
      title: 'Название предмета',
      dataIndex: 'discipline',
      align: 'center',
    },
    {
      title: 'Оценка',
      align: 'center',
      render: ({ id_abit_discip, ball_discipline }) => (
        <GradesSelector
          grades={grades}
          defaultValue={ball_discipline}
          onChange={(_value, option: DefaultOptionType) =>
            handleChangeBall({ id_abit_discip, ball_new: option?.value as number })
          }
        />
      ),
    },
  ];

  return (
    <>
      <Table dataSource={list} columns={columns} />
    </>
  );
};
