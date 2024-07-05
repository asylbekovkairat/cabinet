import { api } from '~shared/api';

import { routes } from './routes';

export const getTours = async (id_bk: number) => {
  let response;

  try {
    response = await api.get(routes.getTour(id_bk));
  } catch (error) {
    response = error;
  }

  return response;
};
