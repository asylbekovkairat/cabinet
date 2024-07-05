import { api } from '~shared/api';

import { AttestatCandidateParams } from '../model';

import { routes } from './routes';

export const getAttestatCandidates = async (params: AttestatCandidateParams) => {
  let response;

  try {
    response = await api.get(routes.getAbiturientRegistraziyList(params));
  } catch (error) {
    response = error;
  }

  return response;
};
