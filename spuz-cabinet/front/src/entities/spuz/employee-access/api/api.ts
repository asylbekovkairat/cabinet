import { api } from '~shared/api';

import { routes } from './routes';

export const getEmployeesAccessList = async (id_users_university: number) => {
  let response;

  try {
    response = await api.get(routes.getUserAccessSpisok(id_users_university));
  } catch (error) {
    response = error;
  }

  return response;
};
