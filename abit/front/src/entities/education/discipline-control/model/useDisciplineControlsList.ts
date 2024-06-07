import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  disciplineControlList,
  setDisciplineControlList,
} from '~entities/education/discipline-control/model/atoms';

export const useDisciplineControlsList = () => {
  return useAtomValue(disciplineControlList);
};

export const useSetDisciplineControlsList = () => {
  return useSetAtom(setDisciplineControlList);
};

export const useResetDisciplineControlsList = () => {
  return useResetAtom(disciplineControlList);
};
