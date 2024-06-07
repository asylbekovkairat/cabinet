import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { passportSeriesAtom, setPassportSeriesAtom } from './atoms';

export const usePassportSeries = () => {
  return useAtomValue(passportSeriesAtom);
};

export const useSetPassportSeries = () => {
  return useSetAtom(setPassportSeriesAtom);
};

export const useResetPassportSeries = () => {
  return useResetAtom(passportSeriesAtom);
};
