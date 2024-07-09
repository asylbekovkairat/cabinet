import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { getUser, getUserFio } from '../api';

import { User, UserFio } from './types';

export const viewerAtom = atomWithDefault<User | null>((_get) => null);
export const userInfoAtom = atomWithDefault<UserFio | null>((_get) => null);

export const setUserAtom = atom<User | null, { authState: User | null }, Promise<void>>(
  null,
  async (_get, set, { authState }) => {
    if (authState) {
      set(viewerAtom, authState);

      return;
    }

    const response = await getUser();
    const newValue = response?.data?.authState;
    set(viewerAtom, newValue);
  }
);

export const setUserInfoAtom = atom<any, any, any>(
  (get) => get(userInfoAtom),
  async (_get, set) => {
    const response = (await getUserFio()) as any;

    if (response.error) {
      set(userInfoAtom, response as unknown as UserFio);
    } else if (response[0].id_university) {
      set(userInfoAtom, response[0] as UserFio);
    }
  }
);
