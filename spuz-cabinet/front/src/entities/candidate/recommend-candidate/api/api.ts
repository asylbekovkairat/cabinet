import { api } from '~shared/api';

import { routes } from './routes';

export const getRecommendCandidates = async (data: {
  id_bk: number;
  id_specialty: number;
  tour: number;
}) => {
  let response;

  try {
    response = await api.post(routes.postRecomInfoSpisok(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};
