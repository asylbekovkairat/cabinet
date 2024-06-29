import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getQualifications } from '../api';

import { Qualification } from './types';

export const qualificationsAtom = atomWithDefault<Qualification[] | null>((_get) => null);

export const setQualificationsAtom = atom<any, any, any>(
  (get) => get(qualificationsAtom),
  async (_get, set) => {
    const response = await getQualifications();
  }
);
