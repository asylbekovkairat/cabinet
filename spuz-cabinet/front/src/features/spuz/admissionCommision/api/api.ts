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

export const deleteAdmissionCommissionUser = async (id_users_university: number) => {
  let response;

  try {
    response = await api.post(routes.removeUsersUniversity(), { id_users_university });
  } catch (error) {
    response = error;
  }

  return response;
};
