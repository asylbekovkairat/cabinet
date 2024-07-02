import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getAdmissionPlan } from '../api';

import { AdmissionPlan } from './types';

export const admissionPlanAtom = atomWithDefault<AdmissionPlan[] | null>((_get) => null);

export const setAdmissionPlanAtom = atom<any, { id_specialty: number; id_bk: number }, any>(
  (get) => get(admissionPlanAtom),
  async (_get, set, { id_specialty, id_bk }) => {
    const response = await getAdmissionPlan(id_specialty, id_bk);

    set(admissionPlanAtom, response as AdmissionPlan[]);
  }
);
