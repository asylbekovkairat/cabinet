import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { getPaymentTypes, getPaymentTypesR } from '../api';

import { PaymentType } from './types';

export const paymentTypesAtom = atomWithDefault<PaymentType[] | null>((_get) => null);
export const paymentTypeIdAtom = atomWithDefault<number | null>((_get) => null);

export const setPaymentTypesAtom = atom<any, any, Promise<void>>(
  (get) => get(paymentTypesAtom),
  async (_get, set) => {
    const response = await getPaymentTypes();

    set(paymentTypesAtom, response as PaymentType[]);
  }
);
export const setPaymentTypeIdAtom = atom<any, { id_bk: number }, any>(
  (get) => get(paymentTypeIdAtom),
  async (_get, set, { id_bk }) => {
    set(paymentTypeIdAtom, id_bk);
  }
);
export const setPaymentTypesRAtom = atom<any, any, any>(
  (get) => get(paymentTypesAtom),
  async (_get, set) => {
    const response = await getPaymentTypesR();

    set(paymentTypesAtom, response as PaymentType[]);
  }
);
