import { FC, memo, useMemo } from 'react';

import { Select, SelectProps } from 'antd';

import { Grades } from '../model';

interface GradesSelector extends SelectProps {
  grades: Grades[];
}

export const GradesSelector: FC<GradesSelector> = memo(({ grades, ...restProps }) => {
  const renderOptions = useMemo(
    () => grades.map(({ label, value }) => ({ label, value })),
    [grades]
  );

  return <Select options={renderOptions} {...restProps} />;
});
