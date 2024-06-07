import {
  ApiEducationPlansData,
  ApiEducationPlansRequest,
} from '~entities/institution/education-plan/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getEducationPlans = ({
  years_id,
  specialty_id,
  id_education_level,
}: ApiEducationPlansRequest) => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiEducationPlansData>>(routes.getEducationPlans(), {
      params: { years_id, specialty_id, id_education_level },
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
