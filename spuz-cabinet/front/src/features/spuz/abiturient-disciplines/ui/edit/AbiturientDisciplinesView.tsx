import { FC, useMemo } from 'react';
import { Table, TableColumnsType, TableProps } from 'antd';

import { DefaultOptionType } from 'antd/es/select';

import { GradesSelector, useGrades } from '~entities/shared/grades';

import { AbiturientDiscipline } from '~entities/spuz/abiturient-discipline';

import { updateAbitDisciplineBall } from '../../api';

interface AbiturientDisciplinesViewProps extends TableProps {
  list: AbiturientDiscipline[];
  loadAbitDisciplines: () => void;
}

export const AbiturientDisciplinesView: FC<AbiturientDisciplinesViewProps> = ({
  list,
  loadAbitDisciplines,
  ...restProps
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

  const columns: TableColumnsType<AbiturientDiscipline> = useMemo(
    () => [
      {
        title: '№',
        align: 'center',
        render: (_value, _row, index) => {
          return index + 1;
        },
      },
      {
        title: 'Название предмета',
        dataIndex: 'discipline',
        align: 'start',
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
    ],
    [list]
  );

  return (
    <>
      <Table bordered dataSource={list} columns={columns} pagination={false} {...restProps} />
    </>
  );
};
