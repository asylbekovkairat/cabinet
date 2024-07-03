import { api } from '~shared/api';

import { routes } from './routes';

export const addAdmissionCommissionUser = async (data: any) => {
  let response;

  try {
    response = await api.post(routes.addUsersUniversity(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};
