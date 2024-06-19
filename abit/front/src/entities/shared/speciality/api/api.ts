import { api } from '~shared/api';

import { routes } from './routes';

export const getSpecialities = async (spuzId: number, learningId: number) => {
  let response;

  try {
    response = await api.get(routes.getSpecialities(spuzId, learningId));
  } catch (error) {
    response = error;
  }

  return response;
};
