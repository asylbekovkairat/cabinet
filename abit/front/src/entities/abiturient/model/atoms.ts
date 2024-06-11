import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getAbitInfo } from '../api';

export const abiturientInfoAtom = atomWithDefault<any | null>((_get) => null);

export const setAbiturientInfoAtom = atom<any, any, any>(
  (get) => get(abiturientInfoAtom),
  async (_get, set) => {
    const response = await getAbitInfo(203763);

    if (response?.data?.error || response?.error) {
      set(abiturientInfoAtom, null);
    } else if (response?.data) {
      set(abiturientInfoAtom, response.data);
    }
  }
);
