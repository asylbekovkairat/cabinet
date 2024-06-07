import { ApiDirectionsData, ApiDirectionsRequest } from '~entities/institution/direction/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getDirections = ({ faculty_id }: ApiDirectionsRequest) => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiDirectionsData>>(routes.getDirections(), {
      params: { faculty_id },
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
