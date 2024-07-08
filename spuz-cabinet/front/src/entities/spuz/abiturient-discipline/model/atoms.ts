import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getAbitDisciplines } from '../api';

import { AbiturientDiscipline } from './types';

export const abiturientDisciplineAtom = atomWithDefault<AbiturientDiscipline[] | null>(
  (_get) => null
);

export const setAbiturientDisciplineAtom = atom<
  any,
  {
    id_learning: number;
    id_admission_plan: number;
    id_abiturient: number;
    tour: number;
  },
  any
>(
  (get) => get(abiturientDisciplineAtom),
  async (_get, set, params) => {
    const response = await getAbitDisciplines(params);

    set(abiturientDisciplineAtom, response as AbiturientDiscipline[]);
  }
);
