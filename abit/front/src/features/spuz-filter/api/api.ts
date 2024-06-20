import { api } from '~shared/api';

import { routes } from './routes';
import { ConfirmRegistration, RegisterData } from './types';

export const registerToSpuz = async (data: RegisterData): Promise<{ kol: number; msg: string }> => {
  let response!: any;

  try {
    response = await api.post(routes.registerSpuz(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};

export const confirmSpuzRegister = async (data: ConfirmRegistration) => {
  let response;

  try {
    response = await api.post(routes.confirmSpuzRegister(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};
