import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getAbitInfo } from '../api';

import { Abiturient } from './types';

export const abiturientInfoAtom = atomWithDefault<Abiturient | null>((_get) => null);

export const setAbiturientInfoAtom = atom<any, { id_enrolle: number }, any>(
  (get) => get(abiturientInfoAtom),
  async (_get, set, { id_enrolle }) => {
    const response = await getAbitInfo(id_enrolle);

    set(abiturientInfoAtom, response as Abiturient);
  }
);
