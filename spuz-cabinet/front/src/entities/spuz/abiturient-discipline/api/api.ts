import { api } from '~shared/api';

import { routes } from './routes';

export const getAbitDisciplines = async (params: Record<string, number>) => {
  let response;

  try {
    response = await api.get(routes.getAbitRegDisc(params));
  } catch (error) {
    response = error;
  }

  return response;
};
