import {
  disciplinesLabelsListAtom,
  setDisciplinesLabelsListAtom,
} from '~entities/shared/disciplines-labels/model/atoms';
import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

export const useDisciplinesLabelsList = () => {
  return useAtomValue(disciplinesLabelsListAtom);
};

export const useSetDisciplinesLabelsList = () => {
  return useSetAtom(setDisciplinesLabelsListAtom);
};

export const useResetDisciplinesLabelsList = () => {
  return useResetAtom(disciplinesLabelsListAtom);
};
