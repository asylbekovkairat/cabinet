import {
  ApiEducationPeriodMonthsData,
  ApiEducationPeriodYearsData,
} from '~entities/education/period/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getEducationPeriodYears = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiEducationPeriodYearsData>>(
      routes.getEducationPeriodYears()
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};

export const getEducationPeriodMonths = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiEducationPeriodMonthsData>>(
      routes.getEducationPeriodMonths()
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
