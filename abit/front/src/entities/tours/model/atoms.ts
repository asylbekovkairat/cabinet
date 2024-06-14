import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getToursInfo } from '../api';

import { Tour } from './types';

export const toursInfoAtom = atomWithDefault<Tour[] | null>((_get) => null);

export const setToursAtom = atom<any, any, Promise<void>>(
  (get) => get(toursInfoAtom),
  async (_get, set) => {
    const response = (await getToursInfo()) as Tour[];

    set(toursInfoAtom, response);
  }
);
