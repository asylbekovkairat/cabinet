import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { regionAtom, regionListAtom, setRegionAtom, setRegionListAtom } from './atoms';

export const useRegionList = () => {
  return useAtomValue(regionListAtom);
};

export const useSetRegionList = () => {
  return useSetAtom(setRegionListAtom);
};

export const useResetRegionList = () => {
  return useResetAtom(regionListAtom);
};

export const useSelectedRegion = () => {
  return useAtomValue(regionAtom);
};

export const useSetSelectedRegion = () => {
  return useSetAtom(setRegionAtom);
};
