import { ILearning } from '~entities/shared/learning/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { getLearnings } from '../api';

export const learningListAtom = atomWithDefault<ILearning[] | null>((_get) => null);

export const setLearningsListAtom = atom<ILearning[] | null, undefined, Promise<void>>(
  (get) => get(learningListAtom),
  async (_get, set) => {
    const response = await getLearnings();

    if (response.data?.error) {
      set(learningListAtom, null);
    } else if (response.data) {
      set(learningListAtom, response.data);
    }
  }
);
