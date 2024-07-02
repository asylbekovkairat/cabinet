import { FC, memo, useMemo } from 'react';

import { SelectProps } from 'antd';

import { Select } from '~shared/ui';

import { Discipline } from '../../model';

interface DisciplineSelectorProps extends SelectProps {
  disciplines: Discipline[];
}

export const DisciplineSelector: FC<DisciplineSelectorProps> = memo(
  ({ disciplines, ...restProps }) => {
    const renderOptions = useMemo(
      () =>
        disciplines.map(({ id_discipline, discipline }) => ({
          value: id_discipline,
          label: discipline,
        })),
      [disciplines]
    );

    return <Select options={renderOptions} {...restProps} />;
  }
);
