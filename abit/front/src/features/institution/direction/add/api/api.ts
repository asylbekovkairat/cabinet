import { ApiDirectionAddData } from '~features/institution/direction/add/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const addDirection = async (data: ApiDirectionAddData) => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<ApiDirectionAddData>>(routes.addDirection(), {
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
