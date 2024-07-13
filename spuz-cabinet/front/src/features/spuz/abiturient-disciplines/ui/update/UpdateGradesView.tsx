import { Button } from 'antd';
import { FC, useEffect } from 'react';

import { useAbitDisciplines } from '~entities/spuz/abiturient-discipline';

import { useAttestatGrades, useSetAttestatGrades } from '~entities/spuz/attestat-grades';
import { useAdminPlan } from '~entities/spuz/admission-plan';
import { useTourId } from '~entities/spuz/tour';

import { UploadIcon } from '~shared/ui';

import { updateAbitDisciplineBall } from '../../api';

interface UpdateGradesViewProps {
  id_abiturient: number;
  loadAbitDisciplines: () => void;
}

export const UpdateGradesView: FC<UpdateGradesViewProps> = ({
  id_abiturient,
  loadAbitDisciplines,
}) => {
  const tourId = useTourId();
  const attestatGrades = useAttestatGrades();
  const abiturientDisciplines = useAbitDisciplines();
  const adminPlan = useAdminPlan();

  const setAttestatGrades = useSetAttestatGrades();

  const getAttestatGrades = async (idAbiturient: number) => setAttestatGrades({ idAbiturient });

  const updateAbiturientGrades = () => {
    const updatedGradesPromise = new Promise<void>((resolve, reject) => {
      const requests: Promise<unknown>[] = [];

      attestatGrades?.forEach((attestat) => {
        abiturientDisciplines?.forEach((abiturient) => {
          if (
            attestat.id_discipline === abiturient.id_discipline &&
            attestat.ball !== abiturient.ball_discipline
          ) {
            const request = updateAbitDisciplineBall({
              ball_new: attestat.ball,
              id_abit_discip: abiturient.id_abit_discip,
            });

            requests.push(request);
          }
        });
      });

      Promise.all(requests)
        .then(() => resolve())
        .catch((error) => reject(error));
    });

    updatedGradesPromise.then(() => loadAbitDisciplines());
  };

  useEffect(() => {
    if (attestatGrades) {
      updateAbiturientGrades();
    }
  }, [attestatGrades]);

  return (
    <Button
      className="flex items-center"
      type="primary"
      icon={<UploadIcon />}
      onClick={() => getAttestatGrades(id_abiturient)}
    >
      Загрузить
    </Button>
  );
};
