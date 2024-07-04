import { useAtomValue, useSetAtom } from 'jotai';

import { employeesAccessAtom, setEmployeesAccessAtom } from './atoms';

export const useEmployeesAccessList = () => {
  return useAtomValue(employeesAccessAtom);
};

export const useSetEmployeesAccessList = () => {
  return useSetAtom(setEmployeesAccessAtom);
};
