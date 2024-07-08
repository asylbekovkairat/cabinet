import { useAtomValue, useSetAtom } from 'jotai';

import {
  adminPlanAtom,
  admissionPlanAtom,
  admissionPlanListAtom,
  setAdminPlanAtom,
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

export const useSetAdminPlan = () => {
  return useSetAtom(setAdminPlanAtom);
};

export const useAdminPlan = () => {
  return useAtomValue(adminPlanAtom);
};
