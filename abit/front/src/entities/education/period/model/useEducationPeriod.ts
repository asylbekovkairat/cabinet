import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  educationPeriodMonths,
  educationPeriodYears,
  setEducationPeriodMonths,
  setEducationPeriodYears,
} from '~entities/education/period/model/atoms';

export const useEducationPeriodYears = () => {
  return useAtomValue(educationPeriodYears);
};

export const useSetEducationPeriodYears = () => {
  return useSetAtom(setEducationPeriodYears);
};

export const useResetEducationPeriodYears = () => {
  return useResetAtom(educationPeriodYears);
};

export const useEducationPeriodMonths = () => {
  return useAtomValue(educationPeriodMonths);
};

export const useSetEducationPeriodMonths = () => {
  return useSetAtom(setEducationPeriodMonths);
};

export const useResetEducationPeriodMonths = () => {
  return useResetAtom(educationPeriodMonths);
};
