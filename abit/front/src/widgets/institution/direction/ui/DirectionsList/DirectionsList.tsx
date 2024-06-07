import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  IDirection,
  useDirectionsList,
  useSetDirectionsList,
} from '~entities/institution/direction';
import { DirectionsView } from '~entities/institution/direction/ui';
import { useFacultiesList, useSetFacultiesList } from '~entities/institution/faculty';
import { FacultySelector } from '~entities/institution/faculty/ui';

import { useUser } from '~entities/shared/user';
import { DirectionAddView } from '~features/institution/direction/add';
import { DirectionDeleteView } from '~features/institution/direction/delete';
import { DirectionEditView } from '~features/institution/direction/edit';

interface IDirectionsList {}

export function DirectionsList({}: IDirectionsList) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();

  const [selectedFacultyId, setSelectedFacultyId] = useState<number>();
  const [activeDirection, setActiveDirection] = useState<IDirection | null>(null);

  const facultiesList = useFacultiesList();
  const setFacultiesList = useSetFacultiesList();

  const directionsList = useDirectionsList();
  const setDirectionsList = useSetDirectionsList();

  useEffect(() => {
    if (!facultiesList?.length) {
      setFacultiesList({ org_id: user?.org || 0 });
    }
  }, []);

  useEffect(() => {
    fetchDirectionsList();
  }, [selectedFacultyId]);

  const fetchDirectionsList = () => {
    setIsLoading(true);
    setDirectionsList({ faculty_id: selectedFacultyId || 0 }).finally(() => setIsLoading(false));
  };

  const onSelectFacultyId = (id: number) => {
    setSelectedFacultyId(id);
  };

  return (
    <div className="grid gap-5">
      <div className="flex justify-between items-center gap-2">
        <div className="flex sm:gap-4 gap-6 items-center w-full">
          <FacultySelector
            placeholder={t('faculty:select')}
            className="w-full"
            faculties={facultiesList || []}
            onSelect={onSelectFacultyId}
          />
        </div>
        <DirectionAddView
          refetchDirectionsList={fetchDirectionsList}
          facultyId={selectedFacultyId || 0}
        />
      </div>
      <DirectionsView
        directions={directionsList || []}
        setDirection={setActiveDirection}
        loading={isLoading}
        actionsSlot={
          <>
            <DirectionEditView
              facultyId={selectedFacultyId || 0}
              direction={activeDirection}
              refetchDirectionsList={fetchDirectionsList}
            />
            <DirectionDeleteView
              direction={activeDirection}
              refetchDirectionsList={fetchDirectionsList}
            />
          </>
        }
      />
    </div>
  );
}
