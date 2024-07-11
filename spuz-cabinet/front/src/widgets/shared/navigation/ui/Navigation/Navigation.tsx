import { FC, useEffect } from 'react';

import { SiderUser, useSetUserInfo, useUser, useUserInfo } from '~entities/shared/user';
import { useCollapsed, useSetCollapsed } from '~features/shared/collapse';
import { useTranslation } from '~shared/lib/i18n';
import { RoutesUrls } from '~shared/lib/router';
import {
  AttestatIcon,
  BadgeCheckIcon,
  BriefCaseIcon,
  CheckIcon,
  DoubleCheckIcon,
  GeneralInfoIcon,
  LogoutIcon,
  PlanIcon,
  RowsIcon,
  SN,
  SearchIcon,
  ShieldIcon,
  Sider,
  SiderButton,
  SiderSettingsButton,
  UsersAccessIcon,
  useWindowInnerWidth,
} from '~shared/ui';
import { INavTabItem } from '~widgets/shared/navigation/ui/types';

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const { t } = useTranslation();
  const collapsedAtom = useCollapsed();
  const setCollapsed = useSetCollapsed();
  const user = useUserInfo();
  const windowWidth = useWindowInnerWidth();

  console.log('user', user);

  useEffect(() => {
    if (windowWidth <= 768) {
      if (collapsedAtom) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [collapsedAtom, windowWidth]);

  const routes: INavTabItem[] = [
    {
      title: t('cm:routes.generalInfo'),
      path: RoutesUrls.generalInfo,
      icon: <GeneralInfoIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.specialities'),
      path: RoutesUrls.specialities,
      icon: <BriefCaseIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.admissionPlan'),
      path: RoutesUrls.admissionPlan,
      icon: <PlanIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.admissionPlanList'),
      path: RoutesUrls.admissionPlanList,
      icon: <RowsIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.admissionCommission'),
      path: RoutesUrls.admissionCommission,
      icon: <UsersAccessIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.grantCommission'),
      path: RoutesUrls.grantCommission,
      icon: <ShieldIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.attestat'),
      path: RoutesUrls.attestat,
      icon: <AttestatIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.recommend'),
      path: RoutesUrls.recommend,
      icon: <CheckIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.confirmCandidate'),
      path: RoutesUrls.confirmCandidate,
      icon: <DoubleCheckIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.searchByPin'),
      path: RoutesUrls.searchByPin,
      icon: <SearchIcon stroke="#4f679b" />,
      isTabBar: true,
    },
  ];

  const settingsRoutes: INavTabItem[] = [
    {
      title: t('cm:bottomLinks.logout'),
      path: RoutesUrls.logout,
      icon: <LogoutIcon />,
      isBlank: false,
    },
  ];

  const handleClickButton = () => {
    if (windowWidth <= 768) {
      setCollapsed(!collapsedAtom);
    }
  };

  return (
    <>
      <Sider
        user={
          <SiderUser
            fio={`${user?.fio_users}`}
            onError={<SN surname={user?.fio_users || ''} name={user?.fio_users || ''} size={18} />}
          />
        }
        routes={routes.map((item) => {
          return (
            <SiderButton
              key={item.path}
              path={item.path}
              title={item.title}
              icon={item.icon}
              collapsed={collapsedAtom}
              onClick={handleClickButton}
            />
          );
        })}
        links={null}
        settings={settingsRoutes?.map((item) => {
          return (
            <SiderSettingsButton
              key={item.path}
              path={item.path}
              title={item.title}
              icon={item.icon}
              isBlank={item.isBlank}
              collapsed={collapsedAtom}
            />
          );
        })}
        collapsed={collapsedAtom}
      />
    </>
  );
};
