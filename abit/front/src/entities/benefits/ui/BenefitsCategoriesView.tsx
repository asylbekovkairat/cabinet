import { Radio, RadioProps } from 'antd';
import { FC } from 'react';

interface Props extends RadioProps {}

const BenefitsCategoriesView: FC<Props> = ({ ...props }) => {
  return (
    <Radio.Group
      className="flex flex-col"
      options={[
        { value: 1, label: 'Без льготы' },
        { value: 2, label: 'Льготник' },
        { value: 4, label: 'Вне конкурса' },
      ]}
      {...props}
    />
  );
};

export default BenefitsCategoriesView;
