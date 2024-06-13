import { FC, useMemo } from 'react';

import { Button, SelectProps, Upload } from 'antd';

import { ReactComponent as UploadIcon } from '~shared/assets/UploadIcon.svg';
import { BeneficiarySelector, Benefits } from '~entities/benefits';

interface BenefitProofProps {
  subCategories: Benefits[];
  handleBeneficiary: (value: number) => void;
  defaultValue?: number;
}

const BenefitProof: FC<BenefitProofProps> = ({
  subCategories,
  handleBeneficiary,
  defaultValue,
}) => {
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
      <BeneficiarySelector
        key={selectProps.defaultValue}
        {...selectProps}
        subCategories={subCategories}
        handleBeneficiary={handleBeneficiary}
      />
      <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" listType="picture">
        <Button className="h-auto xs:flex xs:flex-col" icon={<UploadIcon className="w-[20px]" />}>
          Загрузите подтверждающий документ
        </Button>
      </Upload>
    </div>
  );
};

export default BenefitProof;
