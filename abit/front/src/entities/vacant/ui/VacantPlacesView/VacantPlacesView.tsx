import { InputProps } from 'antd';
import { FunctionComponent, memo } from 'react';

import { Input } from '~shared/ui';

interface Props extends InputProps {
  vacantPlaces: number;
}

export const VacantPlacesView: FunctionComponent<Props> = memo(({ vacantPlaces, ...restProps }) => {
  return <Input style={{ height: 32 }} value={vacantPlaces} disabled {...restProps} />;
});
