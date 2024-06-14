import { useAtomValue } from 'jotai';

import { registrationsAtom } from './atoms';

export const useRegistrations = () => {
  return useAtomValue(registrationsAtom);
};
