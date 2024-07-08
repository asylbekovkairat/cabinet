import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getAdminPlan, getAdmissionPlan, getAdmissionPlanList } from '../api';

import { AdminPlan, AdmissionPlan, AdmissionPlans } from './types';

export const admissionPlanAtom = atomWithDefault<AdmissionPlan[] | null>((_get) => null);
export const admissionPlanListAtom = atomWithDefault<AdmissionPlans[] | null>((_get) => null);
export const adminPlanAtom = atomWithDefault<{ id_admission_plan: number } | null>((_get) => null);

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

export const setAdminPlanAtom = atom<any, { id_specialty: number; id_bk: number }, any>(
  (get) => get(adminPlanAtom),
  async (_get, set, { id_specialty, id_bk }) => {
    const response = (await getAdminPlan(id_specialty, id_bk)) as AdminPlan[];

    set(adminPlanAtom, response[0]);
  }
);
