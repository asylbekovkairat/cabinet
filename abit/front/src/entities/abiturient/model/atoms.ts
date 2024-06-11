import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getAbitInfo } from '../api';

import { Abiturient } from './types';

export const abiturientInfoAtom = atomWithDefault<Abiturient | null>((_get) => null);

export const setAbiturientInfoAtom = atom<any, number, Promise<void>>(
  (get) => get(abiturientInfoAtom),
  async (_get, set, userEnrolleOrt) => {
    const response = await getAbitInfo(userEnrolleOrt);

    set(abiturientInfoAtom, response as any);
  }
);
