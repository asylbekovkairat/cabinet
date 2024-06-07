import { ApiDisciplinesRequest, getEducationDisciplines } from '~entities/education/discipline/api';
import { IDiscipline } from '~entities/education/discipline/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

export const disciplineList = atomWithDefault<IDiscipline[] | null>((_get) => null);

export const setDisciplineList = atom<IDiscipline[] | null, ApiDisciplinesRequest, Promise<void>>(
  (get) => get(disciplineList),
  async (_get, set, { id_org }) => {
    const response = await getEducationDisciplines({ id_org });
    const data = response.data;
    set(disciplineList, data);
  }
);
