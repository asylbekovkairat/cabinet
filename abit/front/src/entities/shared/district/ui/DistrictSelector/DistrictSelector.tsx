import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Select } from '~shared/ui';

import { DistrictItem } from '../../model';

export interface DistrictSelectorProps extends SelectProps {
  value?: any;
  districtList: DistrictItem[];
  required?: boolean;
}

export const DistrictSelector: FC<DistrictSelectorProps> = ({ value, districtList, ...props }) => {
  const { i18n } = useTranslation();

  return (
    <Select
      value={value}
      options={districtList.map((item) => {
        return {
          value: item.id_district,
          label: item[`district_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
