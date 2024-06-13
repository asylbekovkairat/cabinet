import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const uploadAttestat = async (data: FormData) => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<any>>(routes.uploadAttestat(), data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    console.log('response', response);
  } catch (error: any) {
    response = error;
  }

  return response;
};
