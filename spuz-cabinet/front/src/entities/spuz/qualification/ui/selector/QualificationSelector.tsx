import { FC, useMemo } from 'react';

import { Select } from 'antd';

import { SelectProps } from 'antd/lib';

import { Qualification } from '../../model';

interface QualificationSelectorProps extends SelectProps {
  qualifications: Qualification[];
}

export const QualificationSelector: FC<QualificationSelectorProps> = ({
  qualifications,
  ...restProps
}) => {
  const renderOptions = useMemo(
    () =>
      qualifications.map((item) => ({
        label: item.profession_ru,
        value: item.id_profession,
      })),
    [qualifications]
  );

  return <Select options={renderOptions} {...restProps} />;
};
