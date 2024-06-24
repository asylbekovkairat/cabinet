import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from '~widgets/shared/app-header';
import { Navigation } from '~widgets/shared/navigation';

import { PageLayout } from '~shared/ui';
import { useSetUserEnrolleOrt, useUserEnrollOrt } from '~entities/shared/user';
import { useAbiturientInfo, useSetAbiturientInfo } from '~entities/abiturient';

export interface BaseLayoutProps extends Partial<ComponentWithChildren> {}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const userEnrolleOrt = useUserEnrollOrt();
  const abiturientInfo = useAbiturientInfo();

  const setUserEnrolleOrt = useSetUserEnrolleOrt();
  const setAbitinfo = useSetAbiturientInfo();

  useEffect(() => {
    setUserEnrolleOrt();
  }, []);

  useEffect(() => {
    if (userEnrolleOrt) {
      setAbitinfo(userEnrolleOrt?.id_enrollee_ORT);
    }
  }, [userEnrolleOrt]);

  return (
    <PageLayout navigation={<Navigation />} header={<AppHeader />}>
      {children}
      <Outlet />
    </PageLayout>
  );
};
