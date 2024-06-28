import { lazyLoader } from '~shared/lib/utils';

export const GeneralInfoPage = lazyLoader(() =>
  import('./GeneralInfo').then((module) => ({ default: module.GeneralInfoPage }))
);
