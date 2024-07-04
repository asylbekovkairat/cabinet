import { api } from '~shared/api';

import { routes } from './routes';

export const removeGrantCommission = async (id_grant_commission: number) => {
  let response;

  try {
    response = await api.post(routes.removeGrantCommission(), { id_grant_commission });
  } catch (error) {
    response = error;
  }

  return response;
};

export const addGrantCommission = async (data: any) => {
  let response;

  try {
    response = await api.post(routes.addGrantCommission(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};
