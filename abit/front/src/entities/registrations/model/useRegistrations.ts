import { useAtomValue, useSetAtom } from 'jotai';

import {
  registrationsAtom,
  registrationsInfoAtom,
  setRegistrationsAtom,
  setRegistrationsInfoAtom,
} from './atoms';

export const useRegistrations = () => {
  return useAtomValue(registrationsAtom);
};

export const useRegistrationsInfo = () => {
  return useAtomValue(registrationsInfoAtom);
};

export const useSetRegistrations = () => {
  return useSetAtom(setRegistrationsAtom);
};

export const useSetRegistrationsInfo = () => {
  return useSetAtom(setRegistrationsInfoAtom);
};
