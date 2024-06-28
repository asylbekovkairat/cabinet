import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { Spuz } from './types';

export const getSpuzInfo = async (id_university: number) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<any>>(routes.getSpuzInfo(id_university));
  } catch (error) {
    response = error;
  }

  return response;
};

export const updateSpuzInfo = async (data: Spuz) => {
  let response;

  try {
    response = api.post<any, ApiResponseData<any>>(routes.updateSpuzInfo(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};
