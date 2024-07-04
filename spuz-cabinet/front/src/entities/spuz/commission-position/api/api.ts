import { api } from '~shared/api';

import { routes } from './routes';

export const getCommissionPositions = async () => {
  let response;

  try {
    response = await api.get(routes.getGrantPosition());
  } catch (error) {
    response = error;
  }

  return response;
};
