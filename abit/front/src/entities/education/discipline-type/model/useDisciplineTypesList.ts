import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  disciplineTypeList,
  setDisciplineTypeList,
} from '~entities/education/discipline-type/model/atoms';

export const useDisciplineTypesList = () => {
  return useAtomValue(disciplineTypeList);
};

export const useSetDisciplineTypesList = () => {
  return useSetAtom(setDisciplineTypeList);
};

export const useResetDisciplineTypesList = () => {
  return useResetAtom(disciplineTypeList);
};
