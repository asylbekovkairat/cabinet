import { FC } from 'react';

import { Select } from 'antd';

import { SelectProps } from 'antd/lib';

import { Qualification } from '../../model';

interface QualificationSelectorProps extends SelectProps {
  qualifications: Qualification[];
}

export const QualificationSelector: FC<QualificationSelectorProps> = ({
  qualifications,
  ...restProps
}) => {
  return <Select options={qualifications} {...restProps} />;
};
