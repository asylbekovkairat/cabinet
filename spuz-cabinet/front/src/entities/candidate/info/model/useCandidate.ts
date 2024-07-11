import { useAtomValue, useSetAtom } from 'jotai';

import { candidateFioAtom, setCandidateFioAtom } from './atoms';

export const useCandidateFio = () => {
  return useAtomValue(candidateFioAtom);
};

export const useSetCandidateFio = () => {
  return useSetAtom(setCandidateFioAtom);
};
