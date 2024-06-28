import { RoutesUrls } from '~shared/lib/router';

export interface INavTabItem {
  title: string;
  path: string | keyof typeof RoutesUrls;
  icon: React.ReactNode;
  isTabBar?: boolean;
  isBlank?: boolean;
}
