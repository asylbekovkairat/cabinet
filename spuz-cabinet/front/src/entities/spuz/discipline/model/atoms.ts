import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getDisciplineByLearning } from '../api';

import { Discipline } from './types';

export const disciplinesAtom = atomWithDefault<Discipline[] | null>((_get) => null);

export const setDisciplineAtom = atom<any, number, any>(
  (get) => get(disciplinesAtom),
  async (_get, set, id) => {
    const response = await getDisciplineByLearning(id);

    set(disciplinesAtom, response as Discipline[]);
  }
);
