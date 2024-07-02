import { AdmissionPlan } from '~entities/spuz/admission-plan';
import { api } from '~shared/api';

import { routes } from './routes';

export const addAdmissionPlan = (data: AdmissionPlan) => {
  let response;

  try {
    response = api.post(routes.addAdmissionPlan(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};
