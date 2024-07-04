import { useAtomValue, useSetAtom } from 'jotai';

import { employeesAtom, setEmployeesAtom } from './atoms';

export const useEmployees = () => {
  return useAtomValue(employeesAtom);
};

export const useSetEmployess = () => {
  return useSetAtom(setEmployeesAtom);
};
