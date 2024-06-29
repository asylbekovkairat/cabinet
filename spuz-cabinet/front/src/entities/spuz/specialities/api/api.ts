import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getSpecialitiesList = async (id_university: number, id_learning: number) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<any>>(
      routes.getSpecialitiesList(id_university, id_learning)
    );
  } catch (error) {
    response = error;
  }

  return response;
};
