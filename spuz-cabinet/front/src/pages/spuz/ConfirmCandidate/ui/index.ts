import { lazyLoader } from '~shared/lib/utils';

export const ConfirmCandidatePage = lazyLoader(() =>
  import('./ConfirmCandidate').then((module) => ({ default: module.ConfirmCandidateContent }))
);
