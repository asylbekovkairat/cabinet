import { Radio, RadioProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props extends RadioProps {}

const BenefitsCategoriesView: FC<Props> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <Radio.Group
      className="flex flex-col"
      options={[
        { value: 1, label: t('ligotNO') },
        { value: 2, label: t('ligot') },
        { value: 4, label: t('vneKonkursa') },
        { value: 5, label: t('sportMaster') },
      ]}
      {...props}
    />
  );
};

export default BenefitsCategoriesView;
