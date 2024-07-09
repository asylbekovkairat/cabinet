import { useAtomValue } from 'jotai';

import { gradesAtom } from './atoms';

export const useGrades = () => {
  return useAtomValue(gradesAtom);
};
