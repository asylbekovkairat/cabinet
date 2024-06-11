import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { BaseLayout, SiteLayout } from '~pages/layouts';
import { LoginPage } from '~pages/shared/login';
import { LogoutPage } from '~pages/shared/logout';
import { NotFoundPage } from '~pages/shared/not-found';
import { SettingsPage } from '~pages/shared/settings';
import { RequireAuth, RoutesUrls, lazyLoader } from '~shared/lib/router';

// PersonalInfoPage

const PersonalInfoPage = lazyLoader(() =>
  import('~pages/PersonalInfo').then((module) => ({ default: module.PersonalInfoPage }))
);

const SelectSpuzPage = lazyLoader(() =>
  import('~pages/SelectSpuz').then((module) => ({ default: module.SelectSpuzPage }))
);

const routes = [
  {
    path: RoutesUrls.root,
    element: <SiteLayout />,
    children: [
      { path: RoutesUrls.login, element: <LoginPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: RoutesUrls.cabinet,
    element: <RequireAuth loginPath={RoutesUrls.login} />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          { path: RoutesUrls.settings, element: <SettingsPage /> },
          { path: RoutesUrls.personalInfo, element: <PersonalInfoPage /> },
          { path: RoutesUrls.selectSpuz, element: <SelectSpuzPage /> },
          { path: RoutesUrls.viewRegistrations, element: <p>Просмотр регистраций</p> },
          { path: RoutesUrls.tours, element: <p>График туров</p> },
          { path: RoutesUrls.instruction, element: <p>Инструкции</p> },
          { path: RoutesUrls.logout, element: <LogoutPage /> },
        ],
      },
    ],
  },
];

export const Router = () => {
  const routeElement = useRoutes(routes);

  return routeElement;
};
