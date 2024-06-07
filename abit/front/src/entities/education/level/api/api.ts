import { ApiEducationLevelsData } from '~entities/education/level/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getEducationLevels = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiEducationLevelsData>>(routes.getEducationLevels());
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
