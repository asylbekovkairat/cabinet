import { getDisciplinesLabels } from '~entities/shared/disciplines-labels/api';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { DisciplinesLabelsList } from './types';
export const disciplinesLabelsListAtom = atomWithDefault<DisciplinesLabelsList | null>(
  (_get) => null
);

export const setDisciplinesLabelsListAtom = atom<
  DisciplinesLabelsList | null,
  undefined,
  Promise<void>
>(
  (get) => get(disciplinesLabelsListAtom),
  async (_get, set) => {
    const response = await getDisciplinesLabels();

    if (response.data?.error) {
      set(disciplinesLabelsListAtom, null);
    } else if (response.data) {
      set(disciplinesLabelsListAtom, response.data);
    }
  }
);
