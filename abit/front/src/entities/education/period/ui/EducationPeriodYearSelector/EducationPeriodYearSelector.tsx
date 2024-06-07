import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IEducationPeriodYear } from '~entities/education/period/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Select } from '~shared/ui';

interface EducationPeriodYearProps extends SelectProps {
  value?: number;
  educationPeriodYears: IEducationPeriodYear[];
}

export const EducationPeriodYearSelector: FC<EducationPeriodYearProps> = ({
  value,
  educationPeriodYears,
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
      options={educationPeriodYears.map((item) => {
        return {
          value: item.id_education_period_year,
          label: item[`education_period_year_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
