import { Select } from 'antd';
import { SelectProps } from 'antd/lib';
import { FunctionComponent, memo } from 'react';

interface LearningTypeProps extends SelectProps {
  learningTypes: any[];
}

export const LearningTypeSelector: FunctionComponent<LearningTypeProps> = memo(
  ({ learningTypes, ...restProps }) => {
    return <Select {...restProps} options={learningTypes} />;
  }
);
