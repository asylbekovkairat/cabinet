import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiDisciplinesLabelsData } from './types';

export const getDisciplinesLabels = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiDisciplinesLabelsData>>(
      routes.getDisciplinesLabels()
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
