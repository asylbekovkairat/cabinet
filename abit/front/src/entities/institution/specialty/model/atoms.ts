import { ApiSpecialtiesRequest, getSpecialties } from '~entities/institution/specialty/api';
import { ISpecialty } from '~entities/institution/specialty/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

export const specialtiesList = atomWithDefault<ISpecialty[] | null>((_get) => null);

export const setSpecialtiesList = atom<ISpecialty[] | null, ApiSpecialtiesRequest, Promise<void>>(
  (get) => get(specialtiesList),
  async (_get, set, { id_direction }) => {
    const response = await getSpecialties({ id_direction });
    const data = response.data;
    set(specialtiesList, data);
  }
);
