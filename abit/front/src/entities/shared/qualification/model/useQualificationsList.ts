import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { qualificationsListAtom, setQualificationsListAtom } from './atoms';

export const useQualificationsList = () => {
  return useAtomValue(qualificationsListAtom);
};

export const useSetQualificationsList = () => {
  return useSetAtom(setQualificationsListAtom);
};

export const useResetQualificationsList = () => {
  return useResetAtom(qualificationsListAtom);
};
