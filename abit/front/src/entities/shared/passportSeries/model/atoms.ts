import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { getPassportSeriesList } from '../api';

import { IdPassportSeriesType, PassportSeriesList } from './types';

export const passportSeriesAtom = atomWithDefault<IdPassportSeriesType | null>((_get) => null);
export const passportSeriesListAtom = atomWithDefault<PassportSeriesList | null>((_get) => null);

export const setPassportSeriesAtom = atom<
  IdPassportSeriesType | null,
  { idPassportSeries: IdPassportSeriesType },
  Promise<void>
>(
  (get) => get(passportSeriesAtom),
  async (_get, set, { idPassportSeries }) => set(passportSeriesAtom, idPassportSeries)
);

export const setPassportSeriesListAtom = atom<PassportSeriesList | null, undefined, Promise<void>>(
  (get) => get(passportSeriesListAtom),
  async (_get, set) => {
    const response = await getPassportSeriesList();
    const passportSeriesList = response.data;
    set(passportSeriesListAtom, passportSeriesList);
  }
);
