import { api } from '~shared/api';

import { routes } from './routes';

export const getAbitInfo = async (id_enrolle: number) => {
  let response;

  try {
    response = await api.get(routes.getAbitInfoD(id_enrolle));
  } catch (error) {
    response = error;
  }

  return response;
};
