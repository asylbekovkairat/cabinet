import { api } from '~shared/api';

import { routes } from './routes';

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
