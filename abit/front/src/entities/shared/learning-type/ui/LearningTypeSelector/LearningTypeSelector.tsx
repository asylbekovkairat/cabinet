import { Select, SelectProps } from 'antd';
import React, { FunctionComponent, memo } from 'react';

import { Learning } from '../../model';

interface Props extends SelectProps {
  learningTypes: Learning[];
}

export const LearningTypeSelector: FunctionComponent<Props> = memo(
  ({ learningTypes, ...restProps }) => {
    return (
      <Select
        options={learningTypes.map((type) => ({
          label: type.learning,
          value: type.id_learning,
        }))}
        {...restProps}
      />
    );
  }
);
