import { atomWithDefault } from 'jotai/utils';

import { atom } from 'jotai';

import { getCommissionPositions } from '../api';

import { CommissionPosition } from './types';

export const commissionPositionAtom = atomWithDefault<CommissionPosition[] | null>((_get) => null);

export const setCommissionPositionAtom = atom<any, any, any>(
  (get) => get(commissionPositionAtom),
  async (_get, set) => {
    const response = await getCommissionPositions();

    set(commissionPositionAtom, response as CommissionPosition[]);
  }
);
