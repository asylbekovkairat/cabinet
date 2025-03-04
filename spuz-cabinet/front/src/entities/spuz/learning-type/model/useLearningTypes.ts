import { useAtomValue, useSetAtom } from 'jotai';

import {
  learningIdAtom,
  learningTypesAtom,
  setLearningIdAtom,
  setLearningTypesAtom,
  setLearningTypesRAtom,
} from './atoms';

export const useLearningTypes = () => {
  return useAtomValue(learningTypesAtom);
};

export const useLearningId = () => {
  return useAtomValue(learningIdAtom);
};

export const useSetLearningTypes = () => {
  return useSetAtom(setLearningTypesAtom);
};

export const useSetLearningId = () => {
  return useSetAtom(setLearningIdAtom);
};

export const useSetLearningTypesR = () => {
  return useSetAtom(setLearningTypesRAtom);
};
