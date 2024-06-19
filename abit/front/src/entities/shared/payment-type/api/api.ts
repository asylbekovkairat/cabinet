import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getPaymentTypes = async (specialtyId: number) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<any>>(routes.getPaymentType(specialtyId));
  } catch (error) {
    response = error;
  }

  return response;
};
