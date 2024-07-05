import { FC, memo, useMemo } from 'react';

import { SelectProps } from 'antd';

import { Select } from '~shared/ui';

import { Tour } from '../../model';

interface TourSelectorProps extends SelectProps {
  toursList: Tour[];
}

export const TourSelector: FC<TourSelectorProps> = memo(({ toursList, ...restProps }) => {
  const renderOptions = useMemo(
    () => toursList.map(({ tour }) => ({ label: `${tour} тур`, value: tour })),
    [toursList]
  );

  return <Select options={renderOptions} {...restProps} />;
});
