import { useAtomValue } from 'jotai';

import { voucherAtom } from './atoms';

export const useVoucher = () => {
  return useAtomValue(voucherAtom);
};
