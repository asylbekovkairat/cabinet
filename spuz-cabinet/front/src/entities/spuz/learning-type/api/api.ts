import { api } from '~shared/api';

import { routes } from './routes';

export const getLearningTypes = () => {
  let response;

  try {
    response = api.get(routes.getLearningTypes());
  } catch (error) {
    response = error;
  }

  return response;
};

export const getLearningTypesR = (id_university: number) => {
  let response;

  try {
    response = api.get(routes.getLearningTypesR(id_university));
  } catch (error) {
    response = error;
  }

  return response;
};
