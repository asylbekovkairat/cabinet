import { useAtomValue, useSetAtom } from 'jotai';

import { disciplinesAtom, setDisciplineAtom } from './atoms';

export const useDisciplines = () => {
  return useAtomValue(disciplinesAtom);
};

export const useSetDisciplines = () => {
  return useSetAtom(setDisciplineAtom);
};
