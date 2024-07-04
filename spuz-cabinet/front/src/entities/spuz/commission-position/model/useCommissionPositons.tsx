import { useAtomValue, useSetAtom } from 'jotai';

import { commissionPositionAtom, setCommissionPositionAtom } from './atoms';

export const useCommissionPositions = () => {
  return useAtomValue(commissionPositionAtom);
};

export const useSetCommissionPositions = () => {
  return useSetAtom(setCommissionPositionAtom);
};
