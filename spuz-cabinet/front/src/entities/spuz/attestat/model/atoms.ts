import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getAttestatCandidates } from '../api';

import { AttestatCandidate, AttestatCandidateParams } from './types';

export const attestatCandidatesAtom = atomWithDefault<AttestatCandidate[] | null>((_get) => null);

export const setAttestatCandidatesAtom = atom<any, AttestatCandidateParams, any>(
  (get) => get(attestatCandidatesAtom),
  async (_get, set, params) => {
    const response = await getAttestatCandidates(params);

    console.log('response', response);

    if (response) {
      set(attestatCandidatesAtom, response as AttestatCandidate[]);
    } else {
      set(attestatCandidatesAtom, null);
    }
  }
);
