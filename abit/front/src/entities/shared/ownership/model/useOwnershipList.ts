import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { ownershipListAtom, setOwnershipListAtom } from './atoms';

export const useOwnershipList = () => {
  return useAtomValue(ownershipListAtom);
};

export const useSetOwnershipList = () => {
  return useSetAtom(setOwnershipListAtom);
};

export const useResetOwnershipList = () => {
  return useResetAtom(ownershipListAtom);
};
