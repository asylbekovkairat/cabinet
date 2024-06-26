import { FunctionComponent, memo } from 'react';

import { Select } from 'antd';

import { SelectProps } from 'antd/lib';

import { Spuz } from '~entities/spuz/model';

export interface SpuzSelectorProps extends SelectProps {
  value?: any | string;
  spuzList: Spuz[];
}

export const SpuzSelector: FunctionComponent<SpuzSelectorProps> = memo(
  ({ spuzList, value, ...restProps }) => {
    return (
      <Select
        value={value}
        options={spuzList.map((spuz) => ({
          label: spuz.university_name,
          value: spuz.id_university,
        }))}
        {...restProps}
        showSearch
        optionFilterProp="label"
      />
    );
  }
);
