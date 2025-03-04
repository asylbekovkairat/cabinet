import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { setUserAtom, setUserInfoAtom, userInfoAtom, viewerAtom } from './atoms';

export const useUser = () => {
  return useAtomValue(viewerAtom);
};

export const useSetUser = () => {
  return useSetAtom(setUserAtom);
};

export const useResetUser = () => {
  return useResetAtom(viewerAtom);
};

export const useUserInfo = () => {
  return useAtomValue(userInfoAtom);
};

export const useSetUserInfo = () => {
  return useSetAtom(setUserInfoAtom);
};
