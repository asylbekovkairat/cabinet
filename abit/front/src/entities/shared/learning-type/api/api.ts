import { ApiResponseData, api } from '~shared/api';

import { Learning } from '../model';

import { routes } from './routes';

export const getLearningType = async (spuzId: number, learningTypeId: number) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<Learning[] | null>, Promise<Learning>>(
      routes.getLearningTypes(spuzId, learningTypeId)
    );
  } catch (error) {
    response = error;
  }

  return response;
};
