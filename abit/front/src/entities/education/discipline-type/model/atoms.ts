import {
  ApiDisciplineTypesRequest,
  getDisciplineTypes,
} from '~entities/education/discipline-type/api';
import { IDisciplineType } from '~entities/education/discipline-type/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

export const disciplineTypeList = atomWithDefault<IDisciplineType[] | null>((_get) => null);

export const setDisciplineTypeList = atom<
  IDisciplineType[] | null,
  ApiDisciplineTypesRequest,
  Promise<void>
>(
  (get) => get(disciplineTypeList),
  async (_get, set) => {
    const response = await getDisciplineTypes();
    const data = response.data;
    set(disciplineTypeList, data);
  }
);
