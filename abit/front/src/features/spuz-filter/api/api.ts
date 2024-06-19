import { api } from '~shared/api';

import { routes } from './routes';

export const registerToSpuz = async (data: any): Promise<{ kol: number; msg: string }> => {
  let response!: any;

  try {
    response = await api.post(routes.registerSpuz(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};
