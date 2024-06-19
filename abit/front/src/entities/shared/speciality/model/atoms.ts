import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getSpecialities } from '../api';

import { Specialty } from './types';

export const specialitiesAtom = atomWithDefault<Specialty[] | null>((_get) => null);

export const setSpecialitiesAtom = atom<
  any | null,
  { spuzId: number; learningId: number },
  Promise<void>
>(
  (get) => get(specialitiesAtom),
  async (_get, set, { spuzId, learningId }) => {
    const response = await getSpecialities(spuzId, learningId);

    set(specialitiesAtom, response as Specialty[]);
  }
);
