import { api } from '~shared/api';

import { routes } from './routes';

export const getAdmissionCommissionList = async (id_university: number) => {
  let response;

  try {
    response = await api.get(routes.getUsersUniversitySpisok(id_university));
  } catch (error) {
    response = error;
  }

  return response;
};
