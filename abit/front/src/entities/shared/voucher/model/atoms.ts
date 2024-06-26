import { atomWithDefault } from 'jotai/utils';

import { VOUCHER } from './consts';

export const voucherAtom = atomWithDefault((_get) => VOUCHER);
