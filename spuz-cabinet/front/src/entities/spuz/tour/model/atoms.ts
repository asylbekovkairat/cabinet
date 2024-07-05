import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getTours } from '../api';

import { Tour } from './types';

export const toursAtom = atomWithDefault<Tour[] | null>((_get) => null);
export const tourIdAtom = atomWithDefault<number | null>((_get) => null);

export const setToursAtom = atom<any, { id_bk: number }, any>(
  (get) => get(toursAtom),
  async (_get, set, { id_bk }) => {
    const response = await getTours(id_bk);

    set(toursAtom, response as Tour[]);
  }
);

export const setTourIdAtom = atom<any, { tour: number }, any>(
  (get) => get(tourIdAtom),
  async (_get, set, { tour }) => {
    set(tourIdAtom, tour);
  }
);
