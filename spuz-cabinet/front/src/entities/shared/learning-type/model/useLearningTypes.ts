import { useAtomValue, useSetAtom } from 'jotai';

import { learningTypesAtom, setLearningTypesAtom } from './atoms';

export const useLearningTypes = () => {
  return useAtomValue(learningTypesAtom);
};

export const useSetLearningTypes = () => {
  return useSetAtom(setLearningTypesAtom);
};
