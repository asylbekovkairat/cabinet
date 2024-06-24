import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getBenefits } from '../api';

import { Benefits } from './types';

export const benefitsAtom = atomWithDefault<Benefits[] | null>((_get) => null);

export const setBenefitsAtom = atom<any, any, Promise<void>>(
  (get) => get(benefitsAtom),
  async (_get, set) => {
    const response = await getBenefits();

    set(benefitsAtom, response);
  }
);
