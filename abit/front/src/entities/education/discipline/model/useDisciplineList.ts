import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import { disciplineList, setDisciplineList } from '~entities/education/discipline/model/atoms';

export const useDisciplineList = () => {
  return useAtomValue(disciplineList);
};

export const useSetDisciplineList = () => {
  return useSetAtom(setDisciplineList);
};

export const useResetDisciplineList = () => {
  return useResetAtom(disciplineList);
};
