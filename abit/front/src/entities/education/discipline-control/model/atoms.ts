import {
  ApiDisciplineControlsRequest,
  getDisciplineControls,
} from '~entities/education/discipline-control/api';
import { IDisciplineControl } from '~entities/education/discipline-control/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

export const disciplineControlList = atomWithDefault<IDisciplineControl[] | null>((_get) => null);

export const setDisciplineControlList = atom<
  IDisciplineControl[] | null,
  ApiDisciplineControlsRequest,
  Promise<void>
>(
  (get) => get(disciplineControlList),
  async (_get, set) => {
    const response = await getDisciplineControls();
    const data = response.data;
    set(disciplineControlList, data);
  }
);
