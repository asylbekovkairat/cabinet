import { lazyLoader } from '~shared/lib/utils';

export const RecommendCandidatePage = lazyLoader(() =>
  import('./RecommendCandidate').then((module) => ({ default: module.RecommendCandidatePage }))
);
