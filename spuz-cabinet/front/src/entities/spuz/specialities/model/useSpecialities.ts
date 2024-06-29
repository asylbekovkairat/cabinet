import { useAtomValue, useSetAtom } from 'jotai';

import { setSpecialitiesAtom, specialitiesAtom } from './atoms';

export const useSpecialitiesList = () => {
  return useAtomValue(specialitiesAtom);
};

export const useSetSpecialitiesList = () => {
  return useSetAtom(setSpecialitiesAtom);
};
