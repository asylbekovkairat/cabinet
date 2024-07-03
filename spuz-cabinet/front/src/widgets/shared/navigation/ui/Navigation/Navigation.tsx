import { FC, useEffect } from 'react';

import { SiderUser, useUser } from '~entities/shared/user';
import { useCollapsed, useSetCollapsed } from '~features/shared/collapse';
import { useTranslation } from '~shared/lib/i18n';
import { RoutesUrls } from '~shared/lib/router';
import {
  ApplicationIcon,
  GeneralInfoIcon,
  LogoutIcon,
  OrganizationPhotoIcon,
  SN,
  SettingsIcon,
  Sider,
  SiderButton,
  SiderSettingsButton,
  UsersIcon,
  useWindowInnerWidth,
} from '~shared/ui';
import { INavTabItem } from '~widgets/shared/navigation/ui/types';

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const { t } = useTranslation();
  const collapsedAtom = useCollapsed();
  const setCollapsed = useSetCollapsed();
  const user = useUser();
  const windowWidth = useWindowInnerWidth();

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
      icon: <ApplicationIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.admissionPlan'),
      path: RoutesUrls.admissionPlan,
      icon: <ApplicationIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.admissionPlanList'),
      path: RoutesUrls.admissionPlanList,
      icon: <ApplicationIcon />,
      isTabBar: true,
    },
    {
      title: t('cm:routes.admissionCommission'),
      path: RoutesUrls.admissionCommission,
      icon: <ApplicationIcon />,
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
            fio={`${user?.s} ${user?.n?.charAt(-0)}. ${user?.p ? user?.p.charAt(0) + '.' : ''}`}
            onError={<SN surname={user?.s || ''} name={user?.n || ''} size={18} />}
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
