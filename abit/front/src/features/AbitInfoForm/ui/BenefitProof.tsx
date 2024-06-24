import { FC, useMemo } from 'react';

import { SelectProps } from 'antd';

import { BeneficiarySelector, Benefits } from '~entities/benefits';
import { UploadImageView } from '~features/shared/upload';
import { useAbiturientInfo } from '~entities/abiturient';

interface BenefitProofProps {
  subCategories: Benefits[];
  handleBeneficiary: (value: number) => void;
  defaultValue?: number;
  mainBenefitId: number;
}

const BenefitProof: FC<BenefitProofProps> = ({
  subCategories,
  handleBeneficiary,
  defaultValue,
  mainBenefitId,
}) => {
  const abiturientInfo = useAbiturientInfo();
  const selectProps = useMemo(() => {
    const props: SelectProps = {};

    if (
      subCategories.some((item) => item.id_abiturient_category === defaultValue) &&
      defaultValue !== 1
    ) {
      props.defaultValue = defaultValue;
    }

    return props;
  }, [defaultValue, subCategories]);

  return (
    <div className="flex flex-col gap-2">
      {mainBenefitId !== 5 && (
        <BeneficiarySelector
          key={selectProps.defaultValue}
          {...selectProps}
          subCategories={subCategories}
          handleBeneficiary={handleBeneficiary}
        />
      )}
      <UploadImageView
        uploadText="Загрузите подтверждающий документ"
        upload_type="documentLigot"
        thumbFileName={abiturientInfo?.documentLigot || ''}
      />
    </div>
  );
};

export default BenefitProof;
