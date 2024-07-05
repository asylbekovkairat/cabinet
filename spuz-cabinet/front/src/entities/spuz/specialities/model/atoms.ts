import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getSpecialitiesList, getSpecialitiesR } from '../api';

import { Speciality } from './types';

export const specialitiesAtom = atomWithDefault<Speciality[] | null>((_get) => null);
export const specialityIdAtom = atomWithDefault<number | null>((_get) => null);

export const setSpecialitiesAtom = atom<any, { id_university: number; id_learning: number }, any>(
  (get) => get(specialitiesAtom),
  async (_get, set, { id_university, id_learning }) => {
    const response = await getSpecialitiesList(id_university, id_learning);

    set(specialitiesAtom, response as Speciality[]);
  }
);
export const setSpecialitityIdAtom = atom<any, { id_specialty: number }, any>(
  (get) => get(specialityIdAtom),
  async (_get, set, { id_specialty }) => {
    set(specialityIdAtom, id_specialty);
  }
);

export const setSpecialityRAtom = atom<any, { id_university: number; id_learning: number }, any>(
  (get) => get(specialitiesAtom),
  async (_get, set, { id_university, id_learning }) => {
    const response = await getSpecialitiesR(id_university, id_learning);

    set(specialitiesAtom, response as Speciality[]);
  }
);
