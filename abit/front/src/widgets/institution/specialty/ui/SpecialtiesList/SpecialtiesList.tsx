import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  IDirection,
  useDirectionsList,
  useResetDirectionsList,
  useSetDirectionsList,
} from '~entities/institution/direction';
import { DirectionSelector } from '~entities/institution/direction/ui';
import { useFacultiesList, useSetFacultiesList } from '~entities/institution/faculty';
import { FacultySelector } from '~entities/institution/faculty/ui';
import {
  ISpecialty,
  useResetSpecialtiesList,
  useSetSpecialtiesList,
  useSpecialtiesList,
} from '~entities/institution/specialty';
import { SpecialtiesView } from '~entities/institution/specialty/ui';
import { LearningSelector } from '~entities/shared/learning';
import {
  useLearningsList,
  useResetLearningsList,
  useSetLearningsList,
} from '~entities/shared/learning/model';

import { useUser } from '~entities/shared/user';
import { SpecialtyAddView } from '~features/institution/specialty/add';
import { SpecialtyDeleteView } from '~features/institution/specialty/delete';
import { SpecialtyEditView } from '~features/institution/specialty/edit';

interface ISpecialtiesList {}

export function SpecialtiesList({}: ISpecialtiesList) {
  const { t } = useTranslation();
  const user = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isDirectionLoading, setIsDirectionLoading] = useState(true);

  const [selectedDirection, setSelectedDirection] = useState<IDirection | null>(null);

  const [selectedLearningId, setSelectedLearningId] = useState<number | null>();
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<ISpecialty | null>(null);

  const facultiesList = useFacultiesList();
  const setFacultiesList = useSetFacultiesList();

  const directionsList = useDirectionsList();
  const setDirectionsList = useSetDirectionsList();
  const resetDirectionsList = useResetDirectionsList();

  const learningsList = useLearningsList();
  const setLearningsList = useSetLearningsList();
  const resetLearningsList = useResetLearningsList();

  const specialtiesList = useSpecialtiesList();
  const setSpecialtiesList = useSetSpecialtiesList();
  const resetSpecialtiesList = useResetSpecialtiesList();

  useEffect(() => {
    if (!facultiesList?.length) {
      setFacultiesList({ org_id: user?.org || 0 });
    }

    if (!learningsList?.length) {
      setLearningsList();
    }

    return () => {
      resetDirectionsList();
      resetLearningsList();
    };
  }, []);

  useEffect(() => {
    fetchSpecialtiesList();
  }, [selectedDirection?.id_direction]);

  const fetchSpecialtiesList = () => {
    setIsLoading(true);

    setSpecialtiesList({
      id_direction: selectedDirection?.id_direction || 0,
    }).finally(() => setIsLoading(false));
  };

  const onSelectFacultyId = (id: number) => {
    setIsDirectionLoading(true);
    resetSpecialtiesList();
    setSelectedDirection(null);
    setSelectedLearningId(null);
    setDirectionsList({ faculty_id: id }).finally(() => setIsDirectionLoading(false));
  };

  const onSelectLearningId = (value: number) => {
    setSelectedLearningId(value);
  };

  const onSelectDirection = (id: number) => {
    setSelectedDirection(directionsList?.find((dir) => dir.id_direction === id) || null);
  };

  return (
    <div className="grid gap-5">
      <div className="flex flex-col justify-between gap-2">
        <FacultySelector
          placeholder={t('faculty:select')}
          className="col-span-5"
          faculties={facultiesList || []}
          onSelect={onSelectFacultyId}
        />
        <div className="w-full flex items-center gap-2">
          <DirectionSelector
            placeholder={t('direction:select')}
            className="w-full"
            disabled={isDirectionLoading}
            value={selectedDirection?.id_direction}
            directions={directionsList || []}
            onSelect={onSelectDirection}
          />
          <LearningSelector
            className="min-w-[194px]"
            placeholder={t('specialty:learning') ?? ''}
            learningList={learningsList || []}
            value={selectedLearningId}
            onSelect={onSelectLearningId}
            disabled={!selectedDirection?.id_direction}
            allowClear
            onClear={() => setSelectedLearningId(null)}
          />
          <SpecialtyAddView
            refetchSpecialtiesList={fetchSpecialtiesList}
            learningId={selectedLearningId}
            direction={selectedDirection}
            disabled={!(selectedLearningId && selectedDirection?.id_direction)}
          />
        </div>
      </div>
      <SpecialtiesView
        specialties={
          Array.isArray(specialtiesList)
            ? specialtiesList.filter((specialty: ISpecialty) =>
                selectedLearningId ? specialty.id_learning === selectedLearningId : true
              )
            : []
        }
        setSpecialty={setActiveSpecialtyId}
        loading={isLoading}
        actionsSlot={
          <>
            <SpecialtyEditView
              directionId={selectedDirection?.id_direction || 0}
              specialty={activeSpecialtyId}
              refetchSpecialtiesList={fetchSpecialtiesList}
            />
            <SpecialtyDeleteView
              specialty={activeSpecialtyId}
              refetchSpecialtiesList={fetchSpecialtiesList}
            />
          </>
        }
      />
    </div>
  );
}
