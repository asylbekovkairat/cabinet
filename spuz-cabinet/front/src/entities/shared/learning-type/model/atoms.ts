import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { getLearningTypes } from '../api';

export const learningTypesAtom = atomWithDefault<any>((_get) => null);

export const setLearningTypesAtom = atom<any, any, any>(
  (get) => get(learningTypesAtom),
  async (_get, set) => {
    const response = await getLearningTypes();

    set(learningTypesAtom, response);
  }
);
