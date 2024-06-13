import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const updateAbitInfo = async (data: any) => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<any>>(routes.updateAbiturient(), data);
  } catch (error) {
    response = error;
  }

  return response;
};
