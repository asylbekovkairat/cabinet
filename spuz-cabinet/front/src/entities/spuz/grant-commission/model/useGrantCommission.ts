import { useAtomValue, useSetAtom } from 'jotai';

import { grantCommissionListAtom, setGrantCommissionListAtom } from './atoms';

export const useGrantCommissionList = () => {
  return useAtomValue(grantCommissionListAtom);
};

export const useSetGrantCommissionList = () => {
  return useSetAtom(setGrantCommissionListAtom);
};
