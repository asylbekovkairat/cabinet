import { FunctionComponent, memo, useMemo } from 'react';

import { SelectProps } from 'antd/lib';

import { Select } from '~shared/ui';

import { Learning } from '../model';

interface LearningTypeProps extends SelectProps {
  learningTypes: Learning[];
}

export const LearningTypeSelector: FunctionComponent<LearningTypeProps> = memo(
  ({ learningTypes, ...restProps }) => {
    const renderOptions = useMemo(
      () =>
        learningTypes?.map((learn) => ({
          value: learn.id_learning,
          label: learn.learning,
        })),
      [learningTypes]
    );

    return <Select {...restProps} options={renderOptions} />;
  }
);
