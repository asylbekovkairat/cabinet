import { api } from '~shared/api';

import { routes } from './routes';

export const addEmployeeAccess = async (data: any) => {
  let response;

  try {
    response = await api.post(routes.addUsersUniversityAccess(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};

export const removeEmployeeAccess = async (id_users_university_access: number) => {
  let response;

  try {
    response = await api.post(routes.removeUsersUniversityAccess(), { id_users_university_access });
  } catch (error) {
    response = error;
  }

  return response;
};
