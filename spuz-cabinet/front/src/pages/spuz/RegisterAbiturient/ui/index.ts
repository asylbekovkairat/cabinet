import { lazyLoader } from '~shared/lib/utils';

export const RegisterAbiturientPage = lazyLoader(() =>
  import('./RegisterAbiturientContent').then((module) => ({
    default: module.RegisterAbiturientContent,
  }))
);
