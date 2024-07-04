import { lazyLoader } from '~shared/lib/utils';

export const GrantCommissionPage = lazyLoader(() =>
  import('./GrantCommission').then((module) => ({ default: module.GrantCommissionPage }))
);
