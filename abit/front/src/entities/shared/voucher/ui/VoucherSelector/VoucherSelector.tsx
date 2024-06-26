import { FunctionComponent, memo, useMemo } from 'react';

import { Select, SelectProps } from 'antd';

import { useTranslation } from 'react-i18next';

import { Voucher } from '../../model';

interface Props extends SelectProps {
  voucherList: Voucher[];
}

export const VoucherSelector: FunctionComponent<Props> = memo(({ voucherList, ...restProps }) => {
  const { t, i18n } = useTranslation();

  const renderOptions = useMemo(
    () =>
      voucherList.map((item) => ({
        label: item[`label_${i18n.language}` as keyof Voucher],
        value: item.id,
      })),
    [i18n.language, voucherList]
  );

  return (
    <Select
      options={renderOptions}
      placeholder={t('cm:actions.select')}
      defaultValue={0}
      {...restProps}
    />
  );
});
