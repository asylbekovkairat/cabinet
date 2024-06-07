import { FC } from 'react';
import { SelectProps } from 'antd';

import { Select } from '~shared/ui';

import { PassportSeriesItem } from '../../model';

export interface PassportSeriesSelectorProps extends SelectProps {
  onPassportSeriesSelect: ((value: any) => void) | undefined;
  value?: any;
  passportSeriesList: PassportSeriesItem[];
  required?: boolean;
}

export const PassportSeriesSelector: FC<PassportSeriesSelectorProps> = ({
  onPassportSeriesSelect,
  value,
  passportSeriesList,
  ...props
}) => {
  return (
    <Select
      value={value}
      onChange={onPassportSeriesSelect}
      options={passportSeriesList.map((item) => {
        return {
          value: item.id_passport_series,
          label: item.passport_series,
        };
      })}
      {...props}
    />
  );
};
