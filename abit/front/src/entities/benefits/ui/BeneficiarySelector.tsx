import { FC } from 'react';

import { Select, SelectProps } from 'antd';

import { Benefits } from '../model';

interface BenefitProofProps extends SelectProps {
  subCategories: Benefits[];
  handleBeneficiary: (value: number) => void;
}

const BeneficiarySelector: FC<BenefitProofProps> = ({
  subCategories,
  handleBeneficiary,
  ...props
}) => {
  return (
    <Select
      placeholder="Выберите соответствующую категорию"
      onSelect={handleBeneficiary}
      options={subCategories.map((a) => ({
        label: a.abiturient_category,
        value: a.id_abiturient_category,
      }))}
      {...props}
    />
  );
};

export default BeneficiarySelector;
