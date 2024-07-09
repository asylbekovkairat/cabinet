import { useState } from 'react';

import { useResetAbitDiscipline } from '~entities/spuz/abiturient-discipline';

import { AttestatCandidate } from '~entities/spuz/attestat';

import { AbiturientData } from '~widgets/spuz/abiturientData';
import { Attestat } from '~widgets/spuz/attestat';

export const AttestatPage = () => {
  const resetAbitDiscipline = useResetAbitDiscipline();

  const [showAbitInfo, setShowAbitInfo] = useState<{
    show: boolean;
    info: AttestatCandidate | null;
  }>({
    show: false,
    info: null,
  });

  const openAbitInfo = (info: AttestatCandidate) =>
    setShowAbitInfo((prev) => ({ ...prev, show: true, info }));

  const closeAbitInfo = () => {
    setShowAbitInfo((prev) => ({ ...prev, show: false, info: null }));
    resetAbitDiscipline();
  };

  if (showAbitInfo.show) {
    return <AbiturientData goBack={closeAbitInfo} info={showAbitInfo.info} />;
  }

  return <Attestat openAbitInfo={openAbitInfo} />;
};
