import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import { directionsList, setDirectionsList } from '~entities/institution/direction/model/atoms';

export const useDirectionsList = () => {
  return useAtomValue(directionsList);
};

export const useSetDirectionsList = () => {
  return useSetAtom(setDirectionsList);
};

export const useResetDirectionsList = () => {
  return useResetAtom(directionsList);
};
