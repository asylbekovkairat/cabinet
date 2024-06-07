import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiQualificationsData, ApiQualificationsRequest } from './types';

export const getQualifications = ({ id_org_type }: ApiQualificationsRequest) => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiQualificationsData>>(routes.getQualifications(), {
      params: { id_org_type },
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
