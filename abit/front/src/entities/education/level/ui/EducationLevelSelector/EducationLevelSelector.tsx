import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IEducationLevel } from '~entities/education/level/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Select } from '~shared/ui';

interface EducationLevelSelectorProps extends SelectProps {
  value?: number;
  educationLevels: IEducationLevel[];
}

export const EducationLevelSelector: FC<EducationLevelSelectorProps> = ({
  value,
  educationLevels,
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
      options={educationLevels.map((item) => {
        return {
          value: item.id_education_level,
          label: item[`education_level_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
