import { atomWithDefault } from 'jotai/utils';

import { Grades } from './types';
import { GRADES } from './consts';

export const gradesAtom = atomWithDefault<Grades[]>((_get) => GRADES);
