import { useAtomValue, useSetAtom } from 'jotai';

import { setTourIdAtom, setToursAtom, tourIdAtom, toursAtom } from './atoms';

export const useTours = () => {
  return useAtomValue(toursAtom);
};

export const useTourId = () => {
  return useAtomValue(tourIdAtom);
};

export const useSetTours = () => {
  return useSetAtom(setToursAtom);
};

export const useSetTourId = () => {
  return useSetAtom(setTourIdAtom);
};
