import { lazyLoader } from '~shared/lib/utils';

export { SearchByPinContent } from './SearchByPin';

export const SearchByPinPage = lazyLoader(() =>
  import('./SearchByPin').then((module) => ({ default: module.SearchByPinContent }))
);
