import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import { educationLevelList, setEducationLevelList } from '~entities/education/level/model/atoms';

export const useEducationLevelList = () => {
  return useAtomValue(educationLevelList);
};

export const useSetEducationLevelList = () => {
  return useSetAtom(setEducationLevelList);
};

export const useResetEducationLevelList = () => {
  return useResetAtom(educationLevelList);
};
