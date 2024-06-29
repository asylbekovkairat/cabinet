import { useAtomValue, useSetAtom } from 'jotai';

import { qualificationsAtom, setQualificationsAtom } from './atoms';

export const useQualifications = () => {
  return useAtomValue(qualificationsAtom);
};

export const useSetQualifications = () => {
  return useSetAtom(setQualificationsAtom);
};
