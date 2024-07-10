import { useAtomValue, useSetAtom } from 'jotai';

import { useResetAtom } from 'jotai/utils';

import { attestatCandidatesAtom, setAttestatCandidatesAtom } from './atoms';

export const useAttestatCandidates = () => {
  return useAtomValue(attestatCandidatesAtom);
};

export const useSetAttestatCandidates = () => {
  return useSetAtom(setAttestatCandidatesAtom);
};

export const useResetAttestatCandidates = () => {
  return useResetAtom(attestatCandidatesAtom);
};
