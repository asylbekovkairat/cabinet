import { api } from '~shared/api';

import { routes } from './routes';

export const getAdmissionPlan = async (id_specialty: number, id_bk: number) => {
  let response;

  try {
    response = await api.get(routes.getAdmissionPlan(id_specialty, id_bk));
  } catch (error) {
    response = error;
  }

  return response;
};

export const getAdmissionPlanList = async (id_university: number, id_learning: number) => {
  let response;

  try {
    response = await api.get(routes.getAdmissionPlanList(id_university, id_learning));
  } catch (error) {
    response = error;
  }

  return response;
};

export const getAdminPlan = async (id_specialty: number, id_bk: number) => {
  let response;

  try {
    response = await api.get(routes.getAdminPlan(id_specialty, id_bk));
  } catch (error) {
    response = error;
  }

  return response;
};
