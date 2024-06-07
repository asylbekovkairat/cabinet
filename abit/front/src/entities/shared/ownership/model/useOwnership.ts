import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { ownershipAtom, setOwnershipAtom } from './atoms';

export const useOwnership = () => {
  return useAtomValue(ownershipAtom);
};

export const useSetOwnership = () => {
  return useSetAtom(setOwnershipAtom);
};

export const useResetOwnership = () => {
  return useResetAtom(ownershipAtom);
};
