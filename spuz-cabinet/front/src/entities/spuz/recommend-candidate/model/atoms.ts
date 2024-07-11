import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { getRecommendCandidates } from '../api';

import { RecommendCandidate } from './types';

export const recommendCandidatesAtom = atomWithDefault<RecommendCandidate[] | null>((_get) => null);

export const setRecommendCandidatesAtom = atom<
  any,
  { id_bk: number; id_specialty: number; tour: number },
  any
>(
  (get) => get(recommendCandidatesAtom),
  async (_get, set, params) => {
    const response = await getRecommendCandidates(params);

    set(recommendCandidatesAtom, response as RecommendCandidate[]);
  }
);
