import { ApiResponseData, api } from '~shared/api';

import { Abiturient } from '../model';

import { routes } from './routes';

export const getEnrolleOrt = async () => {
  let response;

  try {
    response = await api.get(routes.enrolleORTId());
  } catch (error) {
    response = error;
  }

  return response;
};

export const getAbitInfo = async (enrolleOrtId: number) => {
  let response!: ApiResponseData<Abiturient> | null;

  try {
    response = await api.get<any, ApiResponseData<Abiturient>>(routes.abitInfo(enrolleOrtId));
  } catch (error) {
    response = null;
  }

  return response;
};
