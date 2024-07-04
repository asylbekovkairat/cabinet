import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getEmployeesList } from '../api';

import { Employee } from './types';

export const employeesAtom = atomWithDefault<Employee[] | null>((_get) => null);

export const setEmployeesAtom = atom<any, number, any>(
  (get) => get(employeesAtom),
  async (_get, set, id_university) => {
    const response = (await getEmployeesList(id_university)) as Employee[];

    set(employeesAtom, response);
  }
);
