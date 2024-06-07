import { getEducationLevels } from '~entities/education/level/api';
import { IEducationLevel } from '~entities/education/level/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

export const educationLevelList = atomWithDefault<IEducationLevel[] | null>((_get) => null);

export const setEducationLevelList = atom<IEducationLevel[] | null, undefined, Promise<void>>(
  (get) => get(educationLevelList),
  async (_get, set) => {
    const response = await getEducationLevels();
    const data = response.data;
    set(educationLevelList, data);
  }
);
