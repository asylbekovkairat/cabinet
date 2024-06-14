import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getToursInfo = async () => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<any>>(routes.getTourInfo());
  } catch (error) {
    response = error;
  }

  return response;
};
