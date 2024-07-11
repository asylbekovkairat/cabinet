import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getConfirmCandidates } from '../api';

import { ConfirmAbiturient } from './types';

export const confirmCandidatesAtom = atomWithDefault<ConfirmAbiturient[] | null>((_get) => null);

export const setConfirmCandidatesAtom = atom<
  any,
  { id_bk: number; id_specialty: number; tour: number },
  any
>(
  (get) => get(confirmCandidatesAtom),
  async (_get, set, params) => {
    const response = await getConfirmCandidates(params);

    set(confirmCandidatesAtom, response as ConfirmAbiturient[]);
  }
);
