import { api } from '~shared/api';

import { routes } from './routes';

export const loadGradesFromAttestat = async (idAbiturient: number) => {
  let response;

  try {
    response = await api.post(routes.updateInfoGrades(), { idAbiturient });
  } catch (error) {
    response = error;
  }

  return response;
};
