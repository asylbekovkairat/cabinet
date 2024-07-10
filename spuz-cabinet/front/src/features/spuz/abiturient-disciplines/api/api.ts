import { api } from '~shared/api';

import { routes } from './routes';
import { SaveAbitType } from './types';

export const updateAbitDisciplineBall = async ({
  id_abit_discip,
  ball_new,
}: {
  id_abit_discip: number;
  ball_new: number;
}) => {
  let response;

  try {
    response = await api.get(routes.updateAbitDiscUpd({ id_abit_discip, ball_new }));
  } catch (error) {
    response = error;
  }

  return response;
};

export const saveAbitInfo = async (params: SaveAbitType) => {
  let response;

  try {
    response = await api.get(routes.saveAbitInfo(params));
  } catch (error) {
    response = error;
  }

  return response;
};
