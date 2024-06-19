import { atom } from 'jotai';

import { atomWithDefault } from 'jotai/utils';

import { getLearningType } from '../api';

import { Learning } from './types';

export const learningTypeAtom = atomWithDefault<Learning[] | null>((_get) => null);

export const setLearningTypeAtom = atom<Learning[] | null, number, Promise<void>>(
  (get) => get(learningTypeAtom),
  async (_get, set, spuzId) => {
    console.log('spuzId', spuzId);

    const response = await getLearningType(spuzId, 1);

    set(learningTypeAtom, response as Learning[]);
  }
);
