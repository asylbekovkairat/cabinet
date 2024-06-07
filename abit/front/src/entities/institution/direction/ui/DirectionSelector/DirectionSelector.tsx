import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IDirection } from '~entities/institution/direction/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Select } from '~shared/ui';

interface DirectionSelectorProps extends SelectProps {
  value?: number | null;
  directions: IDirection[];
}

export const DirectionSelector: FC<DirectionSelectorProps> = ({ value, directions, ...props }) => {
  const { i18n } = useTranslation();

  return (
    <Select
      showSearch
      filterOption={(input, option) =>
        `${option?.label}`.toLowerCase().includes(input.toLowerCase())
      }
      value={value}
      options={directions.map((item) => {
        return {
          value: item.id_direction,
          label: item[`direction_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
