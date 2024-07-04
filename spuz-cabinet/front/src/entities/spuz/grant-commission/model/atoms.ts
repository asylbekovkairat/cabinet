import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { getGrantCommissionList } from '../api';

import { GrantCommission } from './types';

export const grantCommissionListAtom = atomWithDefault<GrantCommission[] | null>((_get) => null);

export const setGrantCommissionListAtom = atom<
  any,
  { id_university: number; id_grant_position: number },
  any
>(
  (get) => get(grantCommissionListAtom),
  async (_get, set, { id_university, id_grant_position }) => {
    const response = await getGrantCommissionList(id_university, id_grant_position);

    set(grantCommissionListAtom, response as GrantCommission[]);
  }
);
