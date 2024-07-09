import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiUserData } from './types';

export const getUser = async () => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<ApiUserData>>(routes.getUserData());
  } catch (error: any) {
    response = error?.response?.data;
    localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
    localStorage.removeItem(import.meta.env.VITE_TOKEN_TTL);
  }

  return response;
};

export const getUserFio = async () => {
  let response;

  try {
    response = await api.get(routes.getUserFio());
  } catch (error) {
    response = error;
  }

  return response;
};
