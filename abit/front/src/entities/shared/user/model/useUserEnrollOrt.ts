import { useAtomValue, useSetAtom } from 'jotai';

import { setUserEnrollORTAtom, userEnrollORTAtom } from './atoms';

export const useUserEnrollOrt = () => {
  return useAtomValue(userEnrollORTAtom);
};

export const useSetUserEnrolleOrt = () => {
  return useSetAtom(setUserEnrollORTAtom);
};
