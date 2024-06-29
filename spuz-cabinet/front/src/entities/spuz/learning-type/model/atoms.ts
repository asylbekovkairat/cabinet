import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { getLearningTypes } from '../api';

import { Learning } from './types';

export const learningIdAtom = atomWithDefault<number | null>((_get) => null);
export const learningTypesAtom = atomWithDefault<Learning[] | null>((_get) => null);

export const setLearningTypesAtom = atom<any, any, any>(
  (get) => get(learningTypesAtom),
  async (_get, set) => {
    const response = await getLearningTypes();

    set(learningTypesAtom, response as Learning[]);
  }
);
export const setLearningIdAtom = atom<any, number, any>(
  (get) => get(learningIdAtom),
  (_get, set, learnId) => set(learningIdAtom, learnId)
);
