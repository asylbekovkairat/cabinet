import { useAtomValue, useSetAtom } from 'jotai';

import { admissionCommissionAtom, setAdmissionCommissionAtom } from './atoms';

export const useAdmissionCommissionList = () => {
  return useAtomValue(admissionCommissionAtom);
};

export const useSetAdmissionCommissionList = () => {
  return useSetAtom(setAdmissionCommissionAtom);
};
