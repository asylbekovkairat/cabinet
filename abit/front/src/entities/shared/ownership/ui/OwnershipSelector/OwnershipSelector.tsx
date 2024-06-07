import { FC } from 'react';
import { SelectProps } from 'antd';

import { Select } from '~shared/ui';

import { OwnershipItem } from '../../model';

export interface OwnershipSelectorProps extends SelectProps {
  value?: any | string;
  ownershipList: OwnershipItem[];
}

export const OwnershipSelector: FC<OwnershipSelectorProps> = ({
  value,
  ownershipList,
  ...props
}) => {
  return (
    <Select
      value={value}
      options={ownershipList.map((item) => {
        return {
          value: item.id_ownership,
          label: item.ownership,
        };
      })}
      {...props}
    />
  );
};
