import { FC } from 'react';
import { SelectProps } from 'antd';

import { Select } from '~shared/ui';

import { EducationItem } from '../../model';

export interface EducationSelectorProps extends SelectProps {
  onEducationListSelect: ((value: any) => void) | undefined;
  value?: any | string;
  educationList: EducationItem[];
}

export const EducationSelector: FC<EducationSelectorProps> = ({
  onEducationListSelect,
  value,
  educationList,
  ...props
}) => {
  return (
    <Select
      onChange={onEducationListSelect}
      value={value}
      placeholder="Образование"
      options={educationList.map((item) => {
        return {
          value: item.id_education,
          label: item.education,
        };
      })}
      {...props}
    />
  );
};
