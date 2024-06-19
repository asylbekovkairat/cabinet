import { useAtomValue, useSetAtom } from 'jotai';

import { setVacantAtom, vacantAtom } from './atoms';

export const useVacantPlaces = () => {
  return useAtomValue(vacantAtom);
};

export const useSetVacantPlaces = () => {
  return useSetAtom(setVacantAtom);
};
