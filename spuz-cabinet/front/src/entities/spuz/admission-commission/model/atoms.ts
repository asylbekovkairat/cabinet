import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getAdmissionCommissionList } from '../api';

import { AdmissionUser } from './types';

export const admissionCommissionAtom = atomWithDefault<AdmissionUser[] | null>((_get) => null);

export const setAdmissionCommissionAtom = atom<any, number, any>(
  (get) => get(admissionCommissionAtom),
  async (_get, set, id_university) => {
    const response = await getAdmissionCommissionList(id_university);

    set(admissionCommissionAtom, response as AdmissionUser[]);
  }
);
