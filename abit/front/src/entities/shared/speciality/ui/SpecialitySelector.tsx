import { Select, SelectProps } from 'antd';
import { FunctionComponent, memo } from 'react';

import { Specialty } from '../model';

interface Props extends SelectProps {
  specialtitesList: Specialty[];
}

export const SpecialitySelector: FunctionComponent<Props> = memo(
  ({ specialtitesList, ...restProps }) => {
    return (
      <Select
        options={specialtitesList.map((item) => ({
          label: item.specialty,
          value: item.id_specialty,
        }))}
        {...restProps}
      />
    );
  }
);
