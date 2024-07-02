import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getAdmissionPlan, getAdmissionPlanList } from '../api';

import { AdmissionPlan, AdmissionPlans } from './types';

export const admissionPlanAtom = atomWithDefault<AdmissionPlan[] | null>((_get) => null);
export const admissionPlanListAtom = atomWithDefault<AdmissionPlans[] | null>((_get) => null);

export const setAdmissionPlanAtom = atom<any, { id_specialty: number; id_bk: number }, any>(
  (get) => get(admissionPlanAtom),
  async (_get, set, { id_specialty, id_bk }) => {
    const response = await getAdmissionPlan(id_specialty, id_bk);

    set(admissionPlanAtom, response as AdmissionPlan[]);
  }
);

export const setAdmissionPlanListAtom = atom<
  any,
  { id_university: number; id_learning: number },
  any
>(
  (get) => get(admissionPlanListAtom),
  async (_get, set, { id_university, id_learning }) => {
    const response = await getAdmissionPlanList(id_university, id_learning);

    set(admissionPlanListAtom, response as AdmissionPlans[]);
  }
);
