import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getSpuzes } from '../api';

import { Spuz } from './types';

export const spuzAtom = atomWithDefault<Spuz[] | null>((_get) => null);

export const setSpuzAtom = atom<Spuz[] | null, number, Promise<void>>(
  (get) => get(spuzAtom),
  async (_get, set, regionId) => {
    const response = await getSpuzes(regionId);

    set(spuzAtom, response as Spuz[]);
  }
);
