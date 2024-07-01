import { api } from '~shared/api';

import { routes } from './routes';

export const addSpecialty = async (data: any) => {
  let response;

  try {
    response = await api.post(routes.addSpecialty(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};

export const editSpecialty = async (data: any) => {
  let response;

  try {
    response = await api.post(routes.updateSpecialty(), { ...data });
  } catch (error) {
    response = error;
  }

  return response;
};

export const deleteSpecialty = async (id_specialty: number) => {
  let response;

  try {
    response = await api.post(routes.removeSpecialty(), { id_specialty });
  } catch (error) {
    response = error;
  }

  return response;
};
