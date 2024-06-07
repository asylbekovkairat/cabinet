import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useEducationLevelList, useSetEducationLevelList } from '~entities/education/level';
import { EducationLevelSelector } from '~entities/education/level/ui';
import {
  useDirectionsList,
  useResetDirectionsList,
  useSetDirectionsList,
} from '~entities/institution/direction';
import { DirectionSelector } from '~entities/institution/direction/ui';
import {
  IEducationPlan,
  useEducationPlanList,
  useSetEducationPlanList,
} from '~entities/institution/education-plan';
import { EducationPlanView } from '~entities/institution/education-plan/ui';
import { useFacultiesList, useSetFacultiesList } from '~entities/institution/faculty';
import { FacultySelector } from '~entities/institution/faculty/ui';
import {
  useResetSpecialtiesList,
  useSetSpecialtiesList,
  useSpecialtiesList,
} from '~entities/institution/specialty';
import { SpecialtiesSelector } from '~entities/institution/specialty/ui';

import { useUser } from '~entities/shared/user';
import { YearSelector } from '~entities/shared/year';
import { useSetYearList, useYearList } from '~entities/shared/year/model';

interface IEducationPlanList {}

export function EducationPlanList({}: IEducationPlanList) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();

  const [selectedYear, setSelectedYear] = useState<number>();
  const [selectedFacultyId, setSelectedFacultyId] = useState<number>();
  const [selectedDirectionId, setSelectedDirectionId] = useState<number | null>();
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<number | null>();
  const [selectedEducationLevelId, setSelectedEducationLevelId] = useState<number>();

  const [activeEducationPlan, setActiveEducationPlan] = useState<IEducationPlan | null>(null);

  const yearList = useYearList();
  const setYearList = useSetYearList();

  const facultiesList = useFacultiesList();
  const setFacultiesList = useSetFacultiesList();

  const directionsList = useDirectionsList();
  const setDirectionsList = useSetDirectionsList();
  const resetDirectionsList = useResetDirectionsList();

  const specialtiesList = useSpecialtiesList();
  const setSpecialtiesList = useSetSpecialtiesList();
  const resetSpecialtiesList = useResetSpecialtiesList();

  const educationLevelList = useEducationLevelList();
  const setEducationLevelList = useSetEducationLevelList();

  const educationPlanList = useEducationPlanList();
  const setEducationPlanList = useSetEducationPlanList();

  useEffect(() => {
    if (!yearList?.length) {
      setYearList();
    }

    if (!facultiesList?.length) {
      setFacultiesList({ org_id: user?.org || 0 });
    }

    if (!educationLevelList?.length) {
      setEducationLevelList();
    }

    setIsLoading(false);

    return () => {
      resetDirectionsList();
      resetSpecialtiesList();
    };
  }, []);

  useEffect(() => {
    if (selectedYear && selectedSpecialtyId && selectedEducationLevelId) {
      fetchEducationPlanList();
    }
  }, [selectedYear, selectedSpecialtyId, selectedEducationLevelId]);

  const onSelectYear = (value: number) => {
    setSelectedYear(value);
  };

  const onSelectFaculty = (value: number) => {
    setSelectedFacultyId(value);
    setSelectedDirectionId(null);
    setSelectedSpecialtyId(null);
    resetDirectionsList();
    resetSpecialtiesList();
    setDirectionsList({ faculty_id: value });
  };

  const onSelectDirection = (value: number) => {
    setSelectedDirectionId(value);
    setSelectedSpecialtyId(null);
    resetSpecialtiesList();
    setSpecialtiesList({ id_direction: value });
  };

  const onSelectSpecialty = (value: number) => {
    setSelectedSpecialtyId(value);
  };

  const onSelectEducationLevel = (value: number) => {
    setSelectedEducationLevelId(value);
  };

  const fetchEducationPlanList = () => {
    setIsLoading(true);

    setEducationPlanList({
      years_id: selectedYear || 0,
      specialty_id: selectedSpecialtyId || 0,
      id_education_level: selectedEducationLevelId || 0,
    }).finally(() => setIsLoading(false));
  };

  return (
    <div className="grid gap-5">
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2">
            <YearSelector
              placeholder={t('selects.year')}
              className="w-44"
              yearsList={yearList || []}
              value={selectedYear}
              onSelect={onSelectYear}
            />
            <FacultySelector
              placeholder={t('faculty:select')}
              className="w-full"
              faculties={facultiesList || []}
              value={selectedFacultyId}
              onSelect={onSelectFaculty}
            />
          </div>
          <div className="w-full gap-2 flex">
            <DirectionSelector
              placeholder={t('direction:select')}
              className="w-full"
              directions={directionsList || []}
              value={selectedDirectionId}
              onSelect={onSelectDirection}
              disabled={!directionsList}
            />
            <SpecialtiesSelector
              placeholder={t('specialty:select')}
              className="w-72"
              specialties={specialtiesList || []}
              value={selectedSpecialtyId}
              onSelect={onSelectSpecialty}
              disabled={!specialtiesList}
            />
            <EducationLevelSelector
              className="min-w-[210px]"
              placeholder={t('education:selectLevel')}
              educationLevels={educationLevelList || []}
              value={selectedEducationLevelId}
              onSelect={onSelectEducationLevel}
            />
          </div>
        </div>
        {/* <FacultyAddView refetchEducationPlanList={fetchEducationPlanList} /> */}
      </div>
      <EducationPlanView
        educationPlans={educationPlanList || []}
        setEducationPlan={setActiveEducationPlan}
        loading={isLoading}
        actionsSlot={
          <>
            {/* <FacultyEditView
              refetchEducationPlanList={fetchEducationPlanList}
              faculty={activeFaculty}
            />
            <FacultyDeleteView
              refetchEducationPlanList={fetchEducationPlanList}
              faculty={activeFaculty}
            /> */}
          </>
        }
      />
    </div>
  );
}
