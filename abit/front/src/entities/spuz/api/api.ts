import { ApiResponseData, api } from '~shared/api';

import { Spuz } from '../model/types';

import { routes } from './routes';

export const getSpuzes = async (regionId: number): Promise<unknown> => {
  let response;

  try {
    response = await api.get<number, ApiResponseData<Spuz>>(routes.getSpuzesInRegion(regionId));
  } catch (error) {
    response = error;
  }

  return response;
};
