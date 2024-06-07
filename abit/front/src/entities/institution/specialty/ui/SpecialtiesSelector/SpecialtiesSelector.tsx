import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ISpecialty } from '~entities/institution/specialty/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Select } from '~shared/ui';

interface SpecialtiesSelectorProps extends SelectProps {
  value?: number | null;
  specialties: ISpecialty[];
}

export const SpecialtiesSelector: FC<SpecialtiesSelectorProps> = ({
  value,
  specialties,
  ...props
}) => {
  const { i18n } = useTranslation();

  return (
    <Select
      showSearch
      filterOption={(input, option) =>
        `${option?.label}`.toLowerCase().includes(input.toLowerCase())
      }
      value={value}
      options={specialties.map((item) => {
        return {
          value: item.id_specialty,
          label: item[`specialty_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
