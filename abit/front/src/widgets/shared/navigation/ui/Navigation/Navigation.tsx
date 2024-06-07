import { FC, useEffect } from 'react';

import { useSettings } from '~entities/shared/settings';
import { RoleType, SiderUser, useUser } from '~entities/shared/user';
import { useCollapsed, useSetCollapsed } from '~features/shared/collapse';
import { DynamicLocaleType } from '~features/shared/locale/set-locale/model';
import { useTranslation } from '~shared/lib/i18n';
import { RoutesUrls } from '~shared/lib/router';
import {
  BookIcon,
  BooksIcon,
  EducationIcon,
  GradesIcon,
  HomeIcon,
  LogoutIcon,
  ManualIcon,
  OrganizationIcon,
  SN,
  SettingsIcon,
  Sider,
  SiderButton,
  SiderSettingsButton,
  UsersIcon,
  useWindowInnerWidth,
} from '~shared/ui';

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const { t, i18n } = useTranslation();
  const collapsedAtom = useCollapsed();
  const setCollapsed = useSetCollapsed();
  const user = useUser();
  const settings = useSettings();
  const windowWidth = useWindowInnerWidth();

  useEffect(() => {
    if (windowWidth <= 768) {
      if (collapsedAtom) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsedAtom]);

  const instructionPDF = settings?.find(
    (el) => el.settings_name === `manualPdf_${i18n.language as DynamicLocaleType}`
  )?.settings_value;

  const instructionRayonoPDF = settings?.find(
    (el) => el.settings_name === `manualPdf_rayono`
  )?.settings_value;

  const routes = [
    {
      title: t('cm:routes.home'),
      path: RoutesUrls.main,
      icon: <HomeIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor', 'ministry', 'printing_house'],
    },
    {
      title: t('cm:routes.organization'),
      path: RoutesUrls.organization,
      icon: <OrganizationIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor'],
    },
    {
      title: t('cm:routes.faculty'),
      path: RoutesUrls.faculty,
      icon: <BooksIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor'],
    },
    {
      title: t('cm:routes.direction'),
      path: RoutesUrls.direction,
      icon: <BooksIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor'],
    },
    {
      title: t('cm:routes.specialty'),
      path: RoutesUrls.specialty,
      icon: <BooksIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor'],
    },
    {
      title: t('cm:routes.disciplines'),
      path: RoutesUrls.disciplines,
      icon: <BookIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor'],
    },
    {
      title: t('cm:routes.employees'),
      path: RoutesUrls.employees,
      icon: <UsersIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor'],
    },
    {
      title: t('cm:routes.curriculum'),
      path: RoutesUrls.curriculum,
      icon: <BooksIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor'],
    },
    {
      title: t('cm:routes.graduates'),
      path: RoutesUrls.graduates,
      icon: <EducationIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor'],
    },
    {
      title: t('cm:routes.grades'),
      path: RoutesUrls.grades,
      icon: <GradesIcon />,
      isTabbar: true,
      show: ['employee', 'organization', 'supervisor'],
    },
  ];

  const settingsRoutes = [
    { title: t('cm:routes.manual'), path: instructionPDF, icon: <ManualIcon />, isBlank: true },
    {
      title: t('cm:routes.settings'),
      path: RoutesUrls.settings,
      icon: <SettingsIcon />,
      isBlank: false,
    },
    // { title: t('cm:routes.help'), path: RoutesUrls.help, icon: <HelpIcon /> },
    // {
    //   title: t('cm:routes.privacyPolicy'),
    //   path: RoutesUrls.privacyPolicy,
    //   icon: <PrivacyPolicyIcon />,
    // },
    {
      title: t('cm:bottomLinks.logout'),
      path: RoutesUrls.logout,
      icon: <LogoutIcon />,
      isBlank: false,
    },
  ];

  if (user?.role.includes(RoleType.rayono)) {
    settingsRoutes?.unshift({
      title: `${t('cm:routes.manual')} - районо`,
      path: instructionRayonoPDF,
      icon: <ManualIcon />,
      isBlank: true,
    });
  }

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
            role={t(`cm:role.${user?.role}`)}
            onError={<SN surname={user?.s || ''} name={user?.n || ''} size={18} />}
          />
        }
        routes={routes
          .filter((x) => x.show?.some((y) => user!.role.includes(y as RoleType)))
          .map((item) => {
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
      {/*
      {windowWidth <= 768 && user?.type === 1 ? (
        <TabBar
          routes={routes
            .filter(
              (x) =>
                x[user?.type === 2 ? 'isMon' : user?.type === 3 ? 'isAparat' : 'isApplicant'] &&
                x.isTabbar === true
            )
            .map((item) => {
              return <TabbarButton key={item.path} path={item.path} icon={item.icon} />;
            })}
        />
      ) : null} */}
    </>
  );
};
