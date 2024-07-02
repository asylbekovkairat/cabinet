import { SelectProps } from 'antd';
import { FC, memo, useMemo } from 'react';

import { Select } from '~shared/ui';

import { Speciality } from '../../model';

interface SpecialitiesSelectorProps extends SelectProps {
  specialitiesList: Speciality[];
}

const SpecialitiesSelector: FC<SpecialitiesSelectorProps> = memo(
  ({ specialitiesList, ...restProps }) => {
    const renderOptions = useMemo(
      () =>
        specialitiesList.map((speciality) => ({
          value: speciality.id_specialty,
          label: speciality.specialty,
        })),
      [specialitiesList]
    );

    return <Select options={renderOptions} {...restProps} />;
  }
);

export default SpecialitiesSelector;
