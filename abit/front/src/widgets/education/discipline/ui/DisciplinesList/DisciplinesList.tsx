import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  IDiscipline,
  useDisciplineList,
  useSetDisciplineList,
} from '~entities/education/discipline';
import { DisciplinesView } from '~entities/education/discipline/ui';
import { useUser } from '~entities/shared/user';

interface IDisciplinesList {}

export function DisciplinesList({}: IDisciplinesList) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();

  const [activeDiscipline, setActiveDiscipline] = useState<IDiscipline | null>(null);

  const disciplinesList = useDisciplineList();
  const setDisciplinesList = useSetDisciplineList();

  useEffect(() => {
    fetchDisciplinesList();
  }, []);

  const fetchDisciplinesList = () => {
    setIsLoading(true);
    setDisciplinesList({ id_org: user?.org || 0 }).finally(() => setIsLoading(false));
  };

  return (
    <div className="grid gap-5">
      <div className="flex justify-end items-center">
        {/* <DisciplineAddView refetchDisciplinesList={fetchDisciplinesList} /> */}
      </div>
      <DisciplinesView
        disciplines={disciplinesList || []}
        setDiscipline={setActiveDiscipline}
        loading={isLoading}
        actionsSlot={
          <>
            {/* <DisciplineEditView
              refetchDisciplinesList={fetchDisciplinesList}
              discipline={activeDiscipline}
            />
            <DisciplineDeleteView
              refetchDisciplinesList={fetchDisciplinesList}
              discipline={activeDiscipline}
            /> */}
          </>
        }
      />
    </div>
  );
}
