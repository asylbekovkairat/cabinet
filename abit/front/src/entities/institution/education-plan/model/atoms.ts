import {
  ApiEducationPlansRequest,
  getEducationPlans,
} from '~entities/institution/education-plan/api';
import { IEducationPlan } from '~entities/institution/education-plan/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

export const educationPlanList = atomWithDefault<IEducationPlan[] | null>((_get) => null);

export const setEducationPlanList = atom<
  IEducationPlan[] | null,
  ApiEducationPlansRequest,
  Promise<void>
>(
  (get) => get(educationPlanList),
  async (_get, set, { years_id, specialty_id, id_education_level }) => {
    const response = await getEducationPlans({ years_id, specialty_id, id_education_level });
    const data = response.data;
    set(educationPlanList, data);
  }
);
