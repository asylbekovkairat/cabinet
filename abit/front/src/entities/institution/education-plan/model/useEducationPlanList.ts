import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  educationPlanList,
  setEducationPlanList,
} from '~entities/institution/education-plan/model/atoms';

export const useEducationPlanList = () => {
  return useAtomValue(educationPlanList);
};

export const useSetEducationPlanList = () => {
  return useSetAtom(setEducationPlanList);
};

export const useResetEducationPlanList = () => {
  return useResetAtom(educationPlanList);
};
