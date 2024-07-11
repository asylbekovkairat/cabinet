import { useAtomValue, useSetAtom } from 'jotai';

import { confirmCandidatesAtom, setConfirmCandidatesAtom } from './atoms';

export const useConfirmCandidates = () => {
  return useAtomValue(confirmCandidatesAtom);
};

export const useSetConfirmCandidates = () => {
  return useSetAtom(setConfirmCandidatesAtom);
};
