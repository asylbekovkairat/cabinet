import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from '~widgets/shared/app-header';
import { Navigation } from '~widgets/shared/navigation';

import { PageLayout } from '~shared/ui';
import { useSetUserInfo } from '~entities/shared/user';

export interface BaseLayoutProps extends Partial<ComponentWithChildren> {}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const setUserInfo = useSetUserInfo();

  useEffect(() => {
    setUserInfo();
  }, []);

  return (
    <PageLayout navigation={<Navigation />} header={<AppHeader />}>
      {children}
      <Outlet />
    </PageLayout>
  );
};
