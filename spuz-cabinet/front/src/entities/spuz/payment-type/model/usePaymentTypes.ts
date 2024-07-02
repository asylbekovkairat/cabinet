import { useAtomValue, useSetAtom } from 'jotai';

import { paymentTypesAtom, setPaymentTypesAtom } from './atoms';

export const usePaymentTypes = () => {
  return useAtomValue(paymentTypesAtom);
};

export const useSetPaymentTypes = () => {
  return useSetAtom(setPaymentTypesAtom);
};
