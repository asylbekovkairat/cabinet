import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getTourByBK, getToursInfo } from '../api';

import { Tour, TourByBK } from './types';

export const toursInfoAtom = atomWithDefault<Tour[] | null>((_get) => null);
export const tourByBkAtom = atomWithDefault<TourByBK[] | null>((_get) => null);

export const setTourByBk = atom<any, number, Promise<void>>(
  (get) => get(tourByBkAtom),
  async (_get, set, id_bk) => {
    const response = (await getTourByBK(id_bk)) as TourByBK[];

    set(tourByBkAtom, response);
  }
);

export const setToursAtom = atom<any, any, Promise<void>>(
  (get) => get(toursInfoAtom),
  async (_get, set) => {
    const response = (await getToursInfo()) as Tour[];

    set(toursInfoAtom, response);
  }
);
