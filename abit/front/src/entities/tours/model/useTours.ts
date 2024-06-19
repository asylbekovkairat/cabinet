import { useAtomValue, useSetAtom } from 'jotai';

import { setTourByBk, setToursAtom, tourByBkAtom, toursInfoAtom } from './atoms';

export const useTours = () => {
  return useAtomValue(toursInfoAtom);
};

export const useSetTours = () => {
  return useSetAtom(setToursAtom);
};

export const useTourByBk = () => {
  return useAtomValue(tourByBkAtom);
};

export const useSetTourByBk = () => {
  return useSetAtom(setTourByBk);
};
