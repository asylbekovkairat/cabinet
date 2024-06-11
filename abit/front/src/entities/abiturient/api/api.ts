import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';

export const getEnrolleOrt = async () => {
  let response;

  try {
    response = await api.get(routes.enrolleORTId());
    console.log('response', response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAbitInfo = async (enrolleOrtId: number) => {
  let response;

  try {
    response = await api.get<any, ApiResponseData<any>>(routes.abitInfo(enrolleOrtId));

    console.log('response', response);

    return response;
  } catch (error) {
    console.log(error);
  }
};
