import { useAtomValue, useSetAtom } from 'jotai';

import { setToursAtom, toursInfoAtom } from './atoms';

export const useTours = () => {
  return useAtomValue(toursInfoAtom);
};

export const useSetTours = () => {
  return useSetAtom(setToursAtom);
};
