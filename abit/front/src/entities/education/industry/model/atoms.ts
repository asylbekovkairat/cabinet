import { getEducationIndustries } from '~entities/education/industry/api';
import { IEducationIndustry } from '~entities/education/industry/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

export const educationIndustriesList = atomWithDefault<IEducationIndustry[] | null>((_get) => null);

export const setEducationIndustriesList = atom<
  IEducationIndustry[] | null,
  undefined,
  Promise<void>
>(
  (get) => get(educationIndustriesList),
  async (_get, set) => {
    const response = await getEducationIndustries();
    const data = response.data;
    set(educationIndustriesList, data);
  }
);
