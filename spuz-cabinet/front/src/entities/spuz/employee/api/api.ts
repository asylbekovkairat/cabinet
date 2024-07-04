import { api } from '~shared/api';

import { routes } from './routes';

export const getEmployeesList = async (id_university: number) => {
  let response;

  try {
    response = await api.get(routes.getUsersSpisok(id_university));
  } catch (error) {
    response = error;
  }

  return response;
};
