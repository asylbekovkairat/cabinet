import { useAtomValue, useSetAtom } from 'jotai';

import { attestatCandidatesAtom, setAttestatCandidatesAtom } from './atoms';

export const useAttestatCandidates = () => {
  return useAtomValue(attestatCandidatesAtom);
};

export const useSetAttestatCandidates = () => {
  return useSetAtom(setAttestatCandidatesAtom);
};
