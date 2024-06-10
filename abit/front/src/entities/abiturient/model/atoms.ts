import { atom } from 'jotai';

import { ApiResponseData } from '~shared/api';

export const abiturientInfoAtom = atom([]);

export const setAbiturientInfoAtom = atom<any, any, any>(
  (get) => get(abiturientInfoAtom),
  async (_get, set) => {
    let response!: ApiResponseData;

    if (response.data.error) {
      set(abiturientInfoAtom, []);
    } else if (response.data) {
      set(abiturientInfoAtom, response.data);
    }
  }
);
