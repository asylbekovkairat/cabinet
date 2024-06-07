import { ApiEducationIndustriesData } from '~entities/education/industry/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getEducationIndustries = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiEducationIndustriesData>>(
      routes.getEducationIndustries()
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
