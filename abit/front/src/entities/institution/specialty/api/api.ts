import {
  ApiSpecialtiesData,
  ApiSpecialtiesRequest,
} from '~entities/institution/specialty/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getSpecialties = ({ id_direction }: ApiSpecialtiesRequest) => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiSpecialtiesData>>(routes.getSpecialties(), {
      params: { id_direction },
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
