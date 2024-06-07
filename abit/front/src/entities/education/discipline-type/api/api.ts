import { ApiDisciplineTypesData } from '~entities/education/discipline-type/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getDisciplineTypes = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiDisciplineTypesData>>(routes.getDisciplineTypes());
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
