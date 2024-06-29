import { ApiResponseData, api } from '~shared/api';

import { Qualification } from '../model';

import { routes } from './routes';

export const getQualifications = () => {
  let response;

  try {
    response = api.get<any, ApiResponseData<Qualification>>(routes.getQualifications());
  } catch (error) {
    response = error;
  }

  return response;
};
