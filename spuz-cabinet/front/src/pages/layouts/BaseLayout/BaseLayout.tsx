import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { AppHeader } from '~widgets/shared/app-header';
import { Navigation } from '~widgets/shared/navigation';

import { PageLayout } from '~shared/ui';
import { useSetUserInfo, useUserInfo } from '~entities/shared/user';
import { Navigate, RoutesUrls } from '~shared/lib/router';

export interface BaseLayoutProps extends Partial<ComponentWithChildren> {}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const userInfo = useUserInfo();
  const setUserInfo = useSetUserInfo();

  useEffect(() => {
    setUserInfo();
  }, []);

  console.log('v', userInfo);

  useEffect(() => {
    if (userInfo?.error) {
      navigate(RoutesUrls.login);
    }
  }, [userInfo]);

  return (
    <PageLayout navigation={<Navigation />} header={<AppHeader />}>
      {children}
      <Outlet />
    </PageLayout>
  );
};
