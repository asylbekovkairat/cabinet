import { Select, SelectProps } from 'antd';
import React, { FunctionComponent } from 'react';

import { Learning } from '../../model';

interface Props extends SelectProps {
  learningTypes: Learning[];
}

const LearningTypeSelector: FunctionComponent<Props> = ({ learningTypes, ...restProps }) => {
  return (
    <Select
      options={learningTypes.map((type) => ({
        label: type.learning,
        value: type.id_learning,
      }))}
      {...restProps}
    />
  );
};

export default LearningTypeSelector;
