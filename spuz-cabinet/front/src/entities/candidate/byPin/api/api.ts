import { api } from '~shared/api';

import { routes } from './routes';

import { CandidateSearchParams } from './types';

export const searchByPin = async (params: CandidateSearchParams) => {
  let response;

  try {
    response = await api.post(routes.searchByPin(), { ...params });
  } catch (error) {
    response = error;
  }

  return response;
};
