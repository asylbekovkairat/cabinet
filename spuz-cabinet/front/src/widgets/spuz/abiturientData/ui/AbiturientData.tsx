import { FC } from 'react';

import { Button } from 'antd';

import { ArrowLeftIcon } from '~shared/ui';
import { AttestatCandidate } from '~entities/spuz/attestat';
import { AbiturientInfoSaveView } from '~features/spuz/abiturient-disciplines';

interface AbiturientDataProps {
  goBack: () => void;
  info: AttestatCandidate | null;
}

const AbiturientData: FC<AbiturientDataProps> = ({ goBack, info }) => {
  return (
    <>
      <Button
        className="p-0 flex items-center w-min !bg-transparent border-none"
        icon={<ArrowLeftIcon />}
        onClick={goBack}
      >
        Вернуться назад
      </Button>
      <AbiturientInfoSaveView info={info} />
    </>
  );
};

export default AbiturientData;
