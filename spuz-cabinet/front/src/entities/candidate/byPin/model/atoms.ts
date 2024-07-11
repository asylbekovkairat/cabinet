import { atomWithDefault } from 'jotai/utils';
import { atom } from 'jotai';

import { CandidateSearchParams, searchByPin } from '../api';

import { CandidateByPin } from './types';

export const candidatesByPinAtom = atomWithDefault<CandidateByPin[] | null>((_get) => null);

export const setCandiditeByPinAtom = atom<any, CandidateSearchParams, any>(
  (get) => get(candidatesByPinAtom),
  async (_get, set, params) => {
    const response = (await searchByPin(params)) as { data: CandidateByPin[]; message: string };

    set(candidatesByPinAtom, response.data);
  }
);
