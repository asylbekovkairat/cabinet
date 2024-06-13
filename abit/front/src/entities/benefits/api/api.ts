import { api } from '~shared/api';

import { routes } from './routes';

export const getBenefits = async () => {
  let response;

  try {
    response = await api.get(routes.benefits());
  } catch (error: any) {
    response = error;
  }

  return response;
};
