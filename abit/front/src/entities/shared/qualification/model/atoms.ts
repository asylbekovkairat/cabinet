import { IQualification } from '~entities/shared/qualification/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { ApiQualificationsRequest, getQualifications } from '../api';

export const qualificationsListAtom = atomWithDefault<IQualification[] | null>((_get) => null);

export const setQualificationsListAtom = atom<
  IQualification[] | null,
  ApiQualificationsRequest,
  Promise<void>
>(
  (get) => get(qualificationsListAtom),
  async (_get, set, { id_org_type }) => {
    const response = await getQualifications({ id_org_type });

    if (response.data?.error) {
      set(qualificationsListAtom, null);
    } else if (response.data) {
      set(qualificationsListAtom, response.data);
    }
  }
);
