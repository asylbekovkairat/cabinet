import { FC, useEffect } from 'react';

import { useAbiturientInfo } from '~entities/abiturient';

import { SiderUser, useUser, useUserEnrollOrt } from '~entities/shared/user';
import { useCollapsed, useSetCollapsed } from '~features/shared/collapse';
import { useTranslation } from '~shared/lib/i18n';
import { RoutesUrls } from '~shared/lib/router';
import {
  BooksIcon,
  GeneralInfoIcon,
  HomeIcon,
  LogoutIcon,
  MinistriesIcon,
  OrganizationIcon,
  SN,
  Sider,
  SiderButton,
  useWindowInnerWidth,
} from '~shared/ui';

export interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const { t } = useTranslation();
  const collapsedAtom = useCollapsed();
  const setCollapsed = useSetCollapsed();
  const user = useUser();
  const windowWidth = useWindowInnerWidth();
  const userEnrolleOrt = useUserEnrollOrt();
  const abiturientInfo = useAbiturientInfo();

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

  const routes = [
    {
      title: 'Персональная данные',
      path: RoutesUrls.personalInfo,
      icon: <HomeIcon />,
      isTabbar: true,
    },
    {
      title: 'Выбрать СПУЗ',
      path: RoutesUrls.selectSpuz,
      icon: <OrganizationIcon />,
      isTabbar: true,
    },
    {
      title: 'Просмотр регистраций',
      path: RoutesUrls.viewRegistrations,
      icon: <MinistriesIcon />,
      isTabbar: true,
    },
    {
      title: 'Трафик туров',
      path: RoutesUrls.tours,
      icon: <GeneralInfoIcon />,
      isTabbar: true,
    },
    {
      title: 'Инструкции',
      path: RoutesUrls.instruction,
      icon: <BooksIcon />,
      isTabbar: true,
    },
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
            sertificateNum={userEnrolleOrt?.NumberSert}
            fio={`${user?.s || abiturientInfo?.surname} ${
              user?.n?.charAt(-0) || abiturientInfo?.names?.charAt(-0)
            }. ${
              user?.p
                ? user?.p.charAt(0) + '.'
                : abiturientInfo?.patronymic && abiturientInfo?.patronymic?.charAt(0) + '.'
            }`}
            role={t(`cm:role.${user?.role}`)}
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
        collapsed={collapsedAtom}
      />
    </>
  );
};
