import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import { abiturientDisciplineAtom, setAbiturientDisciplineAtom } from './atoms';

export const useAbitDisciplines = () => {
  return useAtomValue(abiturientDisciplineAtom);
};

export const useSetAbitDiscipline = () => {
  return useSetAtom(setAbiturientDisciplineAtom);
};

export const useResetAbitDiscipline = () => {
  return useResetAtom(abiturientDisciplineAtom);
};
