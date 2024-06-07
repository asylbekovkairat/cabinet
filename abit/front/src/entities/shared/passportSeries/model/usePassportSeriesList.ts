import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { passportSeriesListAtom, setPassportSeriesListAtom } from './atoms';

export const usePassportSeriesList = () => {
  return useAtomValue(passportSeriesListAtom);
};

export const useSetPassportSeriesList = () => {
  return useSetAtom(setPassportSeriesListAtom);
};

export const useResetPassportSeriesList = () => {
  return useResetAtom(passportSeriesListAtom);
};
