import { lazyLoader } from '~shared/lib/utils';

export const AdmissionPlanPage = lazyLoader(() =>
  import('./AdmissionPlan').then((module) => ({ default: module.AdmissionPlanPage }))
);
