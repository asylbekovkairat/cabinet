import { api } from '~shared/api';

import { routes } from './routes';

export const getGrantCommissionList = async (id_university: number, id_grant_position: number) => {
  let response;

  try {
    response = api.get(routes.getGrantCommissionSpisok(id_university, id_grant_position));
  } catch (error) {
    response = error;
  }

  return response;
};
