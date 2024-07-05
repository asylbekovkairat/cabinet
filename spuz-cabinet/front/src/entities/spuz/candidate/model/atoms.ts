import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

export const candidateFioAtom = atomWithDefault((_get) => '');

export const setCandidateFioAtom = atom<any, { fio: string }, any>(
  (get) => get(candidateFioAtom),
  async (_get, set, { fio }) => {
    set(candidateFioAtom, fio);
  }
);
