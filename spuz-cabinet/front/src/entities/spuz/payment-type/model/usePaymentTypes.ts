import { useAtomValue, useSetAtom } from 'jotai';

import {
  paymentTypeIdAtom,
  paymentTypesAtom,
  setPaymentTypeIdAtom,
  setPaymentTypesAtom,
} from './atoms';

export const usePaymentTypes = () => {
  return useAtomValue(paymentTypesAtom);
};

export const usePaymentTypeId = () => {
  return useAtomValue(paymentTypeIdAtom);
};

export const useSetPaymentTypes = () => {
  return useSetAtom(setPaymentTypesAtom);
};

export const useSetPaymentTypeId = () => {
  return useSetAtom(setPaymentTypeIdAtom);
};
