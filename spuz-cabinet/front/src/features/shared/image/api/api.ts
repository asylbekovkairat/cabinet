import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const downloadImage = async (file: string) => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<any>>(routes.downloadImage(), { file });
  } catch (error) {
    response = error;
  }

  return response;
};
