import { ApiSpecialtyEditData } from '~features/institution/specialty/edit/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const editSpecialty = async (data: ApiSpecialtyEditData) => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<ApiSpecialtyEditData>>(routes.editSpecialty(), {
      id_specialty: data.id_specialty,
      specialty_cipher: data.specialty_cipher,
      specialty_ky: data.specialty_ky,
      specialty_ru: data.specialty_ru,
      specialty_en: data.specialty_en,
      id_learning: data.id_learning,
      id_industry: data.id_industry,
      id_qualification: data.id_qualification,
      id_direction: data.id_direction,
      id_education_period_year: data.id_education_period_year,
      id_education_period_month: data.id_education_period_month,
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
