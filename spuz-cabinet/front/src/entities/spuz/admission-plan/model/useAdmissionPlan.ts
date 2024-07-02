import { useAtomValue, useSetAtom } from 'jotai';

import {
  admissionPlanAtom,
  admissionPlanListAtom,
  setAdmissionPlanAtom,
  setAdmissionPlanListAtom,
} from './atoms';

export const useAdmissionPlan = () => {
  return useAtomValue(admissionPlanAtom);
};

export const useSetAdmissionPlan = () => {
  return useSetAtom(setAdmissionPlanAtom);
};

export const useAdmissionPlanList = () => {
  return useAtomValue(admissionPlanListAtom);
};

export const useSetAdmissionPlanList = () => {
  return useSetAtom(setAdmissionPlanListAtom);
};
