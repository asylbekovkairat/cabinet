import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { learningListAtom, setLearningsListAtom } from './atoms';

export const useLearningsList = () => {
  return useAtomValue(learningListAtom);
};

export const useSetLearningsList = () => {
  return useSetAtom(setLearningsListAtom);
};

export const useResetLearningsList = () => {
  return useResetAtom(learningListAtom);
};
