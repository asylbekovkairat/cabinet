import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getEmployeesAccessList } from '../api';

import { EmployeeAccess } from './types';

export const employeesAccessAtom = atomWithDefault<EmployeeAccess[] | null>((_get) => null);

export const setEmployeesAccessAtom = atom<any, number, any>(
  (get) => get(employeesAccessAtom),
  async (_get, set, id_users_university) => {
    const response = await getEmployeesAccessList(id_users_university);

    set(employeesAccessAtom, response as EmployeeAccess[]);
  }
);
