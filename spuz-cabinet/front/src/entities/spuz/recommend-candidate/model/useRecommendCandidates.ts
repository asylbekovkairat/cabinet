import { useAtomValue, useSetAtom } from 'jotai';

import { recommendCandidatesAtom, setRecommendCandidatesAtom } from './atoms';

export const useRecommendCandidates = () => {
  return useAtomValue(recommendCandidatesAtom);
};

export const useSetRecommendCandidates = () => {
  return useSetAtom(setRecommendCandidatesAtom);
};
