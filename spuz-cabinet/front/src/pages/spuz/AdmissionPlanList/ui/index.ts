import { lazyLoader } from '~shared/lib/utils';

export const AdmissionPlanListPage = lazyLoader(() =>
  import('./AdmissionPlanList').then((module) => ({ default: module.AdmissionPlanListPage }))
);
