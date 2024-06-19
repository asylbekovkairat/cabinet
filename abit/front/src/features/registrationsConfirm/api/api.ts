import { api } from '~shared/api';

import { routes } from './routes';
import { ConfirmParams } from './types';

export const confirmRegistration = async (params: ConfirmParams, url: string) => {
  let response;

  try {
    response = await api.post(routes.confirmRegistration(url), { ...params });
  } catch (error) {
    response = error;
  }

  return response;
};
