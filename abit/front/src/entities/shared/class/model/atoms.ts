import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { getClass } from '../api';

import { ClassList } from './types';
export const classListAtom = atomWithDefault<ClassList | null>((_get) => null);

export const setClassListAtom = atom<ClassList | null, undefined, Promise<void>>(
  (get) => get(classListAtom),
  async (_get, set) => {
    set(classListAtom, [
      { value: 1, label: '9 класс' },
      { value: 2, label: '11 класс' },
    ]);
  }
);
