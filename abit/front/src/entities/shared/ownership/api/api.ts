import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiOwnershipData } from './types';

export const getOwnership = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiOwnershipData>>(routes.getOwnership());
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
