import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getRegistrationsHistory, getRegistrationsHistoryInfo } from '../api';

import { Registration, RegistrationInfo } from './types';

export const registrationsAtom = atomWithDefault<Registration[] | null>((_get) => null);
export const registrationsInfoAtom = atomWithDefault<RegistrationInfo[] | null>((_get) => null);

export const setRegistrationsAtom = atom<any, number, Promise<void>>(
  (get) => get(registrationsAtom),
  async (_get, set, sertificate_id) => {
    const response = await getRegistrationsHistory(sertificate_id);

    set(registrationsAtom, response as Registration[]);
  }
);

export const setRegistrationsInfoAtom = atom<any, number, Promise<void>>(
  (get) => get(registrationsInfoAtom),
  async (_get, set, sertificate_id) => {
    const response = await getRegistrationsHistoryInfo(sertificate_id);

    set(registrationsInfoAtom, response as RegistrationInfo[]);
  }
);
