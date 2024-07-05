import { useAtomValue, useSetAtom } from 'jotai';

import {
  setSpecialitiesAtom,
  setSpecialitityIdAtom,
  setSpecialityRAtom,
  specialitiesAtom,
  specialityIdAtom,
} from './atoms';

export const useSpecialities = () => {
  return useAtomValue(specialitiesAtom);
};

export const useSpecialityId = () => {
  return useAtomValue(specialityIdAtom);
};

export const useSetSpecialities = () => {
  return useSetAtom(setSpecialitiesAtom);
};

export const useSetSpecialityId = () => {
  return useSetAtom(setSpecialitityIdAtom);
};

export const useSetSpecialitiesR = () => {
  return useSetAtom(setSpecialityRAtom);
};
