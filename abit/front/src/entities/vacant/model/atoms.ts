import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getVacantPlaces } from '../api';

import { Vacant } from './types';

export const vacantAtom = atomWithDefault<Vacant[] | null>((_get) => null);

export const setVacantAtom = atom<any, number, Promise<void>>(
  (get) => get(vacantAtom),
  async (_get, set, id_admission_plan) => {
    const response = await getVacantPlaces(id_admission_plan);

    set(vacantAtom, response as Vacant[]);
  }
);
