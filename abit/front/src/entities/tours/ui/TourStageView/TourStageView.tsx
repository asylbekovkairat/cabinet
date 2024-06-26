import { FunctionComponent, memo } from 'react';
import { InputProps } from 'antd';

import { Input } from '~shared/ui';

interface Props extends InputProps {
  tourStage: number;
}

export const TourStageView: FunctionComponent<Props> = memo(({ tourStage, ...restProps }) => {
  return <Input value={tourStage} disabled {...restProps} />;
});
