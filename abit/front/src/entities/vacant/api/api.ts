import { ApiResponseData, api } from '~shared/api';

import { Vacant } from '../model';

import { routes } from './routes';

export const getVacantPlaces = async (id_admission_plan: number) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<Vacant[]>>(
      routes.vacantPlaces(id_admission_plan)
    );
  } catch (error) {
    response = error;
  }

  return response;
};
