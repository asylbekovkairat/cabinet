import {
  ApiDisciplinesData,
  ApiDisciplinesRequest,
} from '~entities/education/discipline/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getEducationDisciplines = ({ id_org }: ApiDisciplinesRequest) => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiDisciplinesData>>(routes.getEducationDisciplines(), {
      params: { id_org },
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
