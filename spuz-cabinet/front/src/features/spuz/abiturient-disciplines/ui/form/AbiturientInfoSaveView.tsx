import { FC, useEffect, useMemo, useState } from 'react';

import { Button, Input, InputNumber } from 'antd';

import { ImageView } from '~features/shared/image';

import {
  AbitDocumentsView,
  useAbiturientInfo,
  useSetAbiturientInfo,
} from '~entities/spuz/abiturient-info';
import { useAbitDisciplines, useSetAbitDiscipline } from '~entities/spuz/abiturient-discipline';
import { useTourId } from '~entities/spuz/tour';
import { AttestatCandidate } from '~entities/spuz/attestat';

import { SaveIcon, UploadIcon, useNotification } from '~shared/ui';

import { AbiturientDisciplinesView } from '../edit';
import { saveAbitInfo } from '../../api';

interface AbiturientInfoSaveViewProps {
  info: AttestatCandidate | null;
}

export const AbiturientInfoSaveView: FC<AbiturientInfoSaveViewProps> = ({ info }) => {
  const notification = useNotification();

  const tourId = useTourId();
  const abiturientInfo = useAbiturientInfo();
  const abiturientDisciplines = useAbitDisciplines();

  const setAbitDiscipline = useSetAbitDiscipline();
  const setAbiturientInfo = useSetAbiturientInfo();

  const [GPA, setGPA] = useState(info?.srBall || 0);
  const [internalTestGrade, setInternalTestGrade] = useState<number | null>(
    info?.testsBall || null
  );

  useEffect(() => {
    if (info?.id_enrollee) {
      setAbiturientInfo({ id_enrolle: info?.id_enrollee });
    }

    if (info?.id_abit && info?.id_admin_plan && info?.id_learn) {
      loadAbitDisciplines();
    }
  }, [info, tourId]);

  useEffect(() => {
    if (abiturientDisciplines) {
      const avarage =
        abiturientDisciplines.reduce(
          (accumulator, currentValue) => accumulator + currentValue.ball_discipline,
          0
        ) / abiturientDisciplines.length;

      setGPA(Math.ceil(avarage * 100) / 100);
    }
  }, [abiturientDisciplines]);

  const loadAbitDisciplines = () =>
    setAbitDiscipline({
      id_abiturient: info!.id_abit,
      id_admission_plan: info!.id_admin_plan,
      id_learning: info!.id_learn,
      tour: tourId!,
    });

  const onAbitInfoSave = async () => {
    if (info && tourId && internalTestGrade) {
      const response = (await saveAbitInfo({
        id_abiturient: info?.id_abit,
        tests_ball: internalTestGrade,
        tour: tourId,
        id_admission_plan: info?.id_admin_plan,
      })) as { res: boolean };

      if (response.res) {
        notification.openNotification({
          message: 'Добавлено',
          type: 'success',
        });
      }
    }
  };

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
      {notification.contextHolder}
      <section className="mx-auto">
        <AbitDocumentsView {...documents} />
        <section className="max-w-[647px]">
          <AbiturientDisciplinesView
            list={abiturientDisciplines || []}
            loadAbitDisciplines={loadAbitDisciplines}
          />
          <div className="flex items-center self-end gap-3 mt-4">
            <div className="flex items-start flex-col justify-end w-full">
              <p>Результаты внутреннего испытания</p>
              <InputNumber
                className="!bg-white !text-black"
                defaultValue={internalTestGrade || 0}
                onChange={(value) => setInternalTestGrade(value)}
                max={5}
                min={0}
              />
            </div>
            <div className="flex items-start flex-col justify-end w-full">
              <p>Средний балл</p>
              <Input className="w-1/3 !bg-white !text-black" disabled value={GPA} />
            </div>
          </div>
          <div className="flex gap-2 justify-center mt-6">
            <Button type="primary" icon={<SaveIcon />} onClick={onAbitInfoSave}>
              Сохранить
            </Button>
            <Button className="flex items-center" type="primary" icon={<UploadIcon />}>
              Загрузить
            </Button>
          </div>
        </section>
      </section>
    </>
  );
};
