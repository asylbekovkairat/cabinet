import { api } from '~shared/api';

import { routes } from './routes';

export const getRegistrationsHistory = async (sertificate_id: number) => {
  let response;

  try {
    response = await api.get(routes.getRegistrationsHistory(sertificate_id));
  } catch (error) {
    response = error;
  }

  return response;
};

export const getRegistrationsHistoryInfo = async (sertificate_id: number) => {
  let response;

  try {
    response = await api.get(routes.getRegistrationsHistoryInfo(sertificate_id));
  } catch (error) {
    response = error;
  }

  return response;
};
