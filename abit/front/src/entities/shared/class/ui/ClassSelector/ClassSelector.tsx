import { SelectProps } from 'antd';
import { FC } from 'react';

import { ClassItem } from '~entities/shared/class/model';

import { Select } from '~shared/ui';

export interface ClassSelectorProps extends SelectProps {
  classList: ClassItem[];
}

export const ClassSelector: FC<ClassSelectorProps> = ({ classList, ...props }) => {
  return <Select options={classList} {...props} />;
};
