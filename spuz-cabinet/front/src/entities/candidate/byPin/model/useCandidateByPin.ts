import { useAtomValue, useSetAtom } from 'jotai';

import { useResetAtom } from 'jotai/utils';

import { candidatesByPinAtom, setCandiditeByPinAtom } from './atoms';

export const useCandidateByPin = () => useAtomValue(candidatesByPinAtom);

export const useSetCandidateByPin = () => useSetAtom(setCandiditeByPinAtom);

export const useResetCandidatesByPin = () => useResetAtom(candidatesByPinAtom);
