import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { ApiPassportSeriesData } from './types';

export const getPassportSeriesList = () => {
  return api.get<any, ApiResponseData<ApiPassportSeriesData>>(routes.getPassportSeriesList(), {});
};
