import { lazyLoader } from '~shared/lib/utils';

export const SpecialitiesPage = lazyLoader(() =>
  import('./Specialities').then((module) => ({ default: module.Specialities }))
);
