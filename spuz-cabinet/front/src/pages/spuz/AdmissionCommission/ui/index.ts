import { lazyLoader } from '~shared/lib/utils';

export const AdmissionCommissionPage = lazyLoader(() =>
  import('./AdmissionCommission').then((module) => ({ default: module.AdmissionCommissionPage }))
);
