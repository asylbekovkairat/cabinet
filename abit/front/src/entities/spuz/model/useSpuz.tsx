import { useAtomValue, useSetAtom } from 'jotai';

import { setSpuzAtom, spuzAtom } from './atoms';

export const useSpuz = () => {
  return useAtomValue(spuzAtom);
};

export const useSetSpuz = () => {
  return useSetAtom(setSpuzAtom);
};
