import { useAtomValue, useSetAtom } from 'jotai';

import { setSpecialitiesAtom, specialitiesAtom } from './atoms';

export const useSpecialities = () => {
  return useAtomValue(specialitiesAtom);
};

export const useSetSpecialities = () => {
  return useSetAtom(setSpecialitiesAtom);
};
