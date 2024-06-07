import {
  ApiDirectionDeleteData,
  ApiDirectionDeleteResponseData,
} from '~features/institution/direction/delete/api/types';
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const deleteDirection = async (data: ApiDirectionDeleteData) => {
  let response;

  try {
    response = await api.delete<any, ApiResponseData<ApiDirectionDeleteResponseData>>(
      routes.deleteDirection(),
      { params: { id_direction: data.id_direction } }
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
