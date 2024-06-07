import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IEducationIndustry } from '~entities/education/industry/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Select } from '~shared/ui';

interface EducationIndustrySelectorProps extends SelectProps {
  value?: number | null;
  educationIndustriesList: IEducationIndustry[];
}

export const EducationIndustrySelector: FC<EducationIndustrySelectorProps> = ({
  value,
  educationIndustriesList,
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
      options={educationIndustriesList.map((item) => {
        return {
          value: item.id_industry,
          label: item[`industry_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
