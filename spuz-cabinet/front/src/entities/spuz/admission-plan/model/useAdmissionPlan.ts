import { useAtomValue, useSetAtom } from 'jotai';

import { admissionPlanAtom, setAdmissionPlanAtom } from './atoms';

export const useAdmissionPlan = () => {
  return useAtomValue(admissionPlanAtom);
};

export const useSetAdmissionPlan = () => {
  return useSetAtom(setAdmissionPlanAtom);
};
