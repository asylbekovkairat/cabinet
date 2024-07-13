import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { loadGradesFromAttestat } from '../api/api';

import { AttestatGrade } from './types';

export const attestatGradesAtom = atomWithDefault<AttestatGrade[] | null>((_get) => null);

export const setAttestatGradesAtom = atom<any, { idAbiturient: number }, any>(
  (get) => get(attestatGradesAtom),
  async (_get, set, { idAbiturient }) => {
    const response = (await loadGradesFromAttestat(idAbiturient)) as {
      data: AttestatGrade[];
      message: string;
      error: boolean;
    };

    set(attestatGradesAtom, response.data);
  }
);
