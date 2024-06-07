import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import { setSpecialtiesList, specialtiesList } from '~entities/institution/specialty/model/atoms';

export const useSpecialtiesList = () => {
  return useAtomValue(specialtiesList);
};

export const useSetSpecialtiesList = () => {
  return useSetAtom(setSpecialtiesList);
};

export const useResetSpecialtiesList = () => {
  return useResetAtom(specialtiesList);
};
