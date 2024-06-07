import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IDisciplineControl } from '~entities/education/discipline-control/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Select } from '~shared/ui';

interface DisciplineTypesSelectorProps extends SelectProps {
  value?: string;
  disciplineTypes: IDisciplineControl[];
}

export const DisciplineTypesSelector: FC<DisciplineTypesSelectorProps> = ({
  value,
  disciplineTypes,
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
      options={disciplineTypes.map((item) => {
        return {
          value: item.id_discipline_control,
          label: item[`discipline_control_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
