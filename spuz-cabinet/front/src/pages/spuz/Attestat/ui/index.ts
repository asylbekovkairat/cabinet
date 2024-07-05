import { lazyLoader } from '~shared/lib/utils';

export const AttestatPage = lazyLoader(() =>
  import('./Attestat').then((module) => ({ default: module.AttestatPage }))
);
