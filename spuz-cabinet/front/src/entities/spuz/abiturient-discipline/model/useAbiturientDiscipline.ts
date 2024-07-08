import { useAtomValue, useSetAtom } from 'jotai';

import { abiturientDisciplineAtom, setAbiturientDisciplineAtom } from './atoms';

export const useAbitDisciplines = () => {
  return useAtomValue(abiturientDisciplineAtom);
};

export const useSetAbitDiscipline = () => {
  return useSetAtom(setAbiturientDisciplineAtom);
};
