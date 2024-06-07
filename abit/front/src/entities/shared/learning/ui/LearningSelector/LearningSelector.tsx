import { SelectProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ILearning } from '~entities/shared/learning/model';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';

import { Select } from '~shared/ui';

export interface LearningSelectorProps extends SelectProps {
  value?: number | null;
  learningList: ILearning[] | null;
}

export const LearningSelector: FC<LearningSelectorProps> = ({ value, learningList, ...props }) => {
  const { i18n } = useTranslation();

  return (
    <Select
      value={value}
      options={learningList?.map((item) => {
        return {
          value: item.id_learning,
          label: item[`learning_${i18n.language as DynamicLocaleType}`],
        };
      })}
      {...props}
    />
  );
};
