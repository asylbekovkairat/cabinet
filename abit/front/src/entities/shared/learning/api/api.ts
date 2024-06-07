import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiLearningsData } from './types';

export const getLearnings = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiLearningsData>>(routes.getLearnings());
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
