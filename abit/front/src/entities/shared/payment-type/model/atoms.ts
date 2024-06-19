import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { getPaymentTypes } from '../api';

import { PaymentType } from './types';

export const paymentTypesAtom = atomWithDefault<PaymentType[] | null>((_get) => null);

export const setPaymentTypesAtom = atom<any, number, Promise<void>>(
  (get) => get(paymentTypesAtom),
  async (_get, set, specialtyId) => {
    const response = await getPaymentTypes(specialtyId);

    set(paymentTypesAtom, response as PaymentType[]);
  }
);
