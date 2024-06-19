import { ApiResponseData, api } from '~shared/api';

import { Tour, TourByBK } from '../model';

import { routes } from './routes';

export const getTourByBK = async (id_bk: number) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<TourByBK[]>>(routes.getTourByBK(id_bk));
  } catch (error) {
    response = error;
  }

  return response;
};

export const getToursInfo = async () => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<Tour[]>>(routes.getTourInfo());
  } catch (error) {
    response = error;
  }

  return response;
};
