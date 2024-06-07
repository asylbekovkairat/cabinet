import { ApiDirectionEditData } from '~features/institution/direction/edit/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const editDirection = async (data: ApiDirectionEditData) => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<ApiDirectionEditData>>(routes.editDirection(), {
      id_direction: data.id_direction,
      faculty_id: data.faculty_id,
      direction_cipher: data.direction_cipher,
      direction_ky: data.direction_ky,
      direction_ru: data.direction_ru,
      direction_en: data.direction_en,
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
