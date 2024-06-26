import { SelectProps } from 'antd';
import { FC, memo } from 'react';

import { Select } from '~shared/ui';

import { RegionItem } from '../../model';

export interface RegionSelectorProps extends SelectProps {
  value?: any | string;
  regionList: RegionItem[];
}

export const RegionSelector: FC<RegionSelectorProps> = memo(({ value, regionList, ...props }) => {
  return (
    <Select
      value={value}
      options={regionList.map((item) => {
        return {
          value: item.id_region,
          label: item.region,
        };
      })}
      {...props}
    />
  );
});
