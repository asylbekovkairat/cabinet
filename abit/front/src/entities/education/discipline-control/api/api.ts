import { ApiDisciplineControlsData } from '~entities/education/discipline-control/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getDisciplineControls = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<ApiDisciplineControlsData>>(
      routes.getDisciplineControls()
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
