import { Select, SelectProps } from 'antd';
import { FunctionComponent } from 'react';

import { Specialty } from '../model';

interface Props extends SelectProps {
  specialtitesList: Specialty[];
}

const SpecialitySelector: FunctionComponent<Props> = ({ specialtitesList, ...restProps }) => {
  return (
    <Select
      options={specialtitesList.map((item) => ({
        label: item.specialty,
        value: item.id_specialty,
      }))}
      {...restProps}
    />
  );
};

export default SpecialitySelector;
