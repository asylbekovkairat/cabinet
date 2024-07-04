import { FC, memo, useMemo } from 'react';

import { SelectProps } from 'antd';

import { Select } from '~shared/ui';

import { CommissionPosition } from '../../model';

interface CommissionPositionSelectorProps extends SelectProps {
  commissionPositions: CommissionPosition[];
}

export const CommissionPositionSelector: FC<CommissionPositionSelectorProps> = memo(
  ({ commissionPositions, ...restProps }) => {
    const renderOptions = useMemo(
      () =>
        commissionPositions.map(({ grant_position, id_grant_position }) => ({
          label: grant_position,
          value: id_grant_position,
        })),
      [commissionPositions]
    );

    return <Select options={renderOptions} {...restProps} />;
  }
);
