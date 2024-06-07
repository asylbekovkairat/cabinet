import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IQualification } from '~entities/shared/qualification/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';

import { Select } from '~shared/ui';

export interface QualificationSelectorProps extends SelectProps {
  value?: number;
  qualificationsList: IQualification[] | null;
}

export const QualificationSelector: FC<QualificationSelectorProps> = ({
  value,
  qualificationsList,
  ...props
}) => {
  const { i18n } = useTranslation();

  return (
    <Select
      value={value}
      options={qualificationsList?.map((item) => {
        return {
          value: item.id_qualification,
          label: item[`qualification_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
