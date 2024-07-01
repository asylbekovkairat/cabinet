import { lazyLoader } from '~shared/lib/utils';

export const RecruitmentPlanPage = lazyLoader(() =>
  import('./RecruitmentPlan').then((module) => ({ default: module.RecruitmentPlanPage }))
);
