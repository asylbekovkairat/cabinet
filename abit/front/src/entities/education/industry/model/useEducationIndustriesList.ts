import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  educationIndustriesList,
  setEducationIndustriesList,
} from '~entities/education/industry/model/atoms';

export const useEducationIndustriesList = () => {
  return useAtomValue(educationIndustriesList);
};

export const useSetEducationIndustriesList = () => {
  return useSetAtom(setEducationIndustriesList);
};

export const useResetEducationIndustriesList = () => {
  return useResetAtom(educationIndustriesList);
};
