import { Select, SelectProps } from 'antd';
import React, { FC, memo } from 'react';

import { PaymentType } from '../model';

interface Props extends SelectProps {
  paymentTypes: PaymentType[];
}

export const PaymentTypeSelector: FC<Props> = memo(({ paymentTypes, ...restProps }) => {
  return (
    <Select
      options={paymentTypes.map((item) => ({
        label: item.bk,
        value: `${item.id_bk}_${item.id_admission_plan}`,
      }))}
      {...restProps}
    />
  );
});
