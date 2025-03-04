import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const uploadImage = async (data: FormData) => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<FormData>>(routes.uploadImage(), data);
  } catch (error) {
    response = error;
  }

  return response;
};

export const downloadImage = async (file: string) => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<any>>(routes.dowmloadImage(), { file });
  } catch (error) {
    response = error;
  }

  return response;
};
