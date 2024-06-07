import { getEducationPeriodMonths, getEducationPeriodYears } from '~entities/education/period/api';
import {
  IEducationPeriodMonth,
  IEducationPeriodYear,
} from '~entities/education/period/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

export const educationPeriodYears = atomWithDefault<IEducationPeriodYear[] | null>((_get) => null);
export const educationPeriodMonths = atomWithDefault<IEducationPeriodMonth[] | null>(
  (_get) => null
);

export const setEducationPeriodYears = atom<
  IEducationPeriodYear[] | null,
  undefined,
  Promise<void>
>(
  (get) => get(educationPeriodYears),
  async (_get, set) => {
    const response = await getEducationPeriodYears();
    const data = response.data;
    set(educationPeriodYears, data);
  }
);

export const setEducationPeriodMonths = atom<
  IEducationPeriodMonth[] | null,
  undefined,
  Promise<void>
>(
  (get) => get(educationPeriodMonths),
  async (_get, set) => {
    const response = await getEducationPeriodMonths();
    const data = response.data;
    set(educationPeriodMonths, data);
  }
);
