import { FC } from 'react';

import { Select, SelectProps } from 'antd';

import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Select
      placeholder={t('cm:selectCategory')}
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
