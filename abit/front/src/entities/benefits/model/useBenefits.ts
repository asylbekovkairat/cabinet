import { useAtomValue, useSetAtom } from 'jotai';

import { benefitsAtom, setBenefitsAtom } from './atoms';

export const useBenefits = () => {
  return useAtomValue(benefitsAtom);
};

export const useSetBenefits = () => {
  return useSetAtom(setBenefitsAtom);
};
