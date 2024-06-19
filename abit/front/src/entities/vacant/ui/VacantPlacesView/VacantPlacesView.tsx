import { InputProps } from 'antd';
import { FunctionComponent } from 'react';

import { Input } from '~shared/ui';

interface Props extends InputProps {
  vacantPlaces: number;
}

const VacantPlacesView: FunctionComponent<Props> = ({ vacantPlaces, ...restProps }) => {
  return <Input style={{ height: 32 }} value={vacantPlaces} disabled {...restProps} />;
};

export default VacantPlacesView;
