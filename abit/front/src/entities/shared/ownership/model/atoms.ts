import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { getOwnership } from '../api';

import { IOwnershipType, OwnershipList } from './types';

export const ownershipAtom = atomWithDefault<IOwnershipType | null>((_get) => null);
export const ownershipListAtom = atomWithDefault<OwnershipList | null>((_get) => null);

export const setOwnershipAtom = atom<
  IOwnershipType | null,
  { ownership: IOwnershipType },
  Promise<void>
>(
  (get) => get(ownershipAtom),
  async (_get, set, { ownership }) => set(ownershipAtom, ownership)
);

export const setOwnershipListAtom = atom<OwnershipList | null, undefined, Promise<void>>(
  (get) => get(ownershipListAtom),
  async (_get, set) => {
    const response = await getOwnership();

    if (response.data?.error) {
      set(ownershipListAtom, null);
    } else if (response.data) {
      set(ownershipListAtom, response.data);
    }
  }
);
