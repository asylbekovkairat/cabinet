import { FC, useEffect, useMemo } from 'react';

import { Button } from 'antd';

import { ArrowLeftIcon } from '~shared/ui';
import {
  AbitDocumentsView,
  useAbiturientInfo,
  useSetAbiturientInfo,
} from '~entities/spuz/abiturient-info';
import { ImageView } from '~features/shared/image';
import { AttestatCandidate } from '~entities/spuz/attestat';
import { useAbitDisciplines, useSetAbitDiscipline } from '~entities/spuz/abiturient-discipline';
import { AbiturientDisciplinesView } from '~features/spuz/abiturient-disciplines';
import { useTourId } from '~entities/spuz/tour';

interface AbiturientDataProps {
  goBack: () => void;
  info: AttestatCandidate | null;
}

const AbiturientData: FC<AbiturientDataProps> = ({ goBack, info }) => {
  const abiturientInfo = useAbiturientInfo();
  const abiturientDisciplines = useAbitDisciplines();
  const tourId = useTourId();

  const setAbiturientInfo = useSetAbiturientInfo();
  const setAbitDiscipline = useSetAbitDiscipline();

  useEffect(() => {
    if (info?.id_enrollee) {
      setAbiturientInfo({ id_enrolle: info?.id_enrollee });
    }

    if (info?.id_abit && info?.id_admin_plan && info?.id_learn) {
      loadAbitDisciplines();
    }
  }, [info, tourId]);

  const loadAbitDisciplines = () =>
    setAbitDiscipline({
      id_abiturient: info!.id_abit,
      id_admission_plan: info!.id_admin_plan,
      id_learning: info!.id_learn,
      tour: tourId!,
    });

  const documents = useMemo(
    () => ({
      attestat1: <ImageView fileName={abiturientInfo?.photoAtestA || ''} />,
      attestat2: <ImageView fileName={abiturientInfo?.photoAtestB || ''} />,
      passport1: <ImageView fileName={abiturientInfo?.documentA || ''} />,
      passport2: <ImageView fileName={abiturientInfo?.documentB || ''} />,
    }),
    [abiturientInfo]
  );

  return (
    <>
      <Button
        className="p-0 flex items-center w-min !bg-transparent border-none"
        icon={<ArrowLeftIcon />}
        onClick={goBack}
      >
        Вернуться назад
      </Button>
      <AbitDocumentsView {...documents} />
      <AbiturientDisciplinesView
        list={abiturientDisciplines || []}
        loadAbitDisciplines={loadAbitDisciplines}
      />
    </>
  );
};

export default AbiturientData;
