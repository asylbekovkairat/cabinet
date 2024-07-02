import { api } from '~shared/api';

import { routes } from './routes';

export const getDisciplineByLearning = async (id: number) => {
  let response;

  try {
    response = await api.get(routes.getDisciplineByLearning(id));
  } catch (error) {
    response = error;
  }

  return response;
};
