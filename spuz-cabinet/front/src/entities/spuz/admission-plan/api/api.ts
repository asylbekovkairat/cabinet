import { api } from '~shared/api';

import { routes } from './routes';

export const getAdmissionPlan = async (id_specialty: number, id_bk: number) => {
  let response;

  try {
    response = await api.get(routes.getAdmissionPlan(id_specialty, id_bk));
  } catch (error) {
    response = error;
  }

  return response;
};
