import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getPaymentTypes = async () => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<any>>(routes.getPaymentType());
  } catch (error) {
    response = error;
  }

  return response;
};

export const getPaymentTypesR = async () => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<any>>(routes.getPaymentTypesR());
  } catch (error) {
    response = error;
  }

  return response;
};
