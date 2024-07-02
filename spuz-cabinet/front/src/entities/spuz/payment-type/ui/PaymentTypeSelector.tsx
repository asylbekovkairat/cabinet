import { SelectProps } from 'antd';
import { FC, memo } from 'react';

import { Select } from '~shared/ui';

import { PaymentType } from '../model';

interface Props extends SelectProps {
  paymentTypes: PaymentType[];
}

export const PaymentTypeSelector: FC<Props> = memo(({ paymentTypes, ...restProps }) => {
  return (
    <Select
      options={paymentTypes.map((item) => ({
        label: item.bk,
        value: item.id_bk,
      }))}
      {...restProps}
    />
  );
});
