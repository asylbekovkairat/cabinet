import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DisciplinesLabelsList } from '~entities/shared/disciplines-labels/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { Select } from '~shared/ui';

export interface DisciplinesLabelsSelectorProps extends SelectProps {
  value?: string;
  disciplinesLabelsList: DisciplinesLabelsList;
}

export const DisciplinesLabelsSelector: FC<DisciplinesLabelsSelectorProps> = ({
  value,
  disciplinesLabelsList,
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
      options={disciplinesLabelsList.map((item) => {
        return {
          value: item.id_discipline_dop_name,
          label: item[`discipline_dop_name_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
