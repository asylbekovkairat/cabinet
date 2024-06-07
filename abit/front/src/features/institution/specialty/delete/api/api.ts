import {
  ApiSpecialtyDeleteData,
  ApiSpecialtyDeleteResponseData,
} from '~features/institution/specialty/delete/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const deleteSpecialty = async (data: ApiSpecialtyDeleteData) => {
  let response;

  try {
    response = await api.delete<any, ApiResponseData<ApiSpecialtyDeleteResponseData>>(
      routes.deleteSpecialty(),
      { params: { id_specialty: data.id_specialty } }
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
