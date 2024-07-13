import { useAtomValue, useSetAtom } from 'jotai';

import { attestatGradesAtom, setAttestatGradesAtom } from './atoms';

export const useAttestatGrades = () => useAtomValue(attestatGradesAtom);

export const useSetAttestatGrades = () => useSetAtom(setAttestatGradesAtom);
