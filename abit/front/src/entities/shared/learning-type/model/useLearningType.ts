import { useAtomValue, useSetAtom } from 'jotai';

import { learningTypeAtom, setLearningTypeAtom } from './atoms';

export const useLearningType = () => {
  return useAtomValue(learningTypeAtom);
};

export const useSetLearningType = () => {
  return useSetAtom(setLearningTypeAtom);
};
