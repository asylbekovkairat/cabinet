import { useEffect, useMemo } from 'react';

import { useLearningId } from '~entities/spuz/learning-type';
import {
  SpecialitiesListView,
  useSetSpecialitiesList,
  useSpecialitiesList,
} from '~entities/spuz/specialities';
import { SpecialitiesAddView } from '~features/spuz';

const Specialities = () => {
  const learningId = useLearningId();
  const specialities = useSpecialitiesList();

  const setSpecialities = useSetSpecialitiesList();

  console.log('learningId', learningId);

  useEffect(() => {
    if (learningId) {
      setSpecialities({ id_university: 138, id_learning: learningId });
    }
  }, [learningId]);

  console.log('specialities', specialities);

  return (
    <>
      <SpecialitiesAddView />
      <SpecialitiesListView list={specialities || []} />
    </>
  );
};

export default Specialities;
