import { useAtomValue, useSetAtom } from 'jotai';

import { abiturientInfoAtom, setAbiturientInfoAtom } from './atoms';

export const useAbiturientInfo = () => {
  return useAtomValue(abiturientInfoAtom);
};

export const useSetAbiturientInfo = () => {
  return useSetAtom(setAbiturientInfoAtom);
};
