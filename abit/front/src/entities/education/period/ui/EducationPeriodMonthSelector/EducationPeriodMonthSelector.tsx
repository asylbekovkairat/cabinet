import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IEducationPeriodMonth } from '~entities/education/period/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Select } from '~shared/ui';

interface EducationPeriodMonthSelectorProps extends SelectProps {
  value?: number;
  educationPeriodMonths: IEducationPeriodMonth[];
}

export const EducationPeriodMonthSelector: FC<EducationPeriodMonthSelectorProps> = ({
  value,
  educationPeriodMonths,
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
      options={educationPeriodMonths.map((item) => {
        return {
          value: item.id_education_period_month,
          label: item[`education_period_month_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
