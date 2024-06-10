import { useRoutes } from 'react-router-dom';

import { BaseLayout, SiteLayout } from '~pages/layouts';
import { LoginPage } from '~pages/shared/login';
import { LogoutPage } from '~pages/shared/logout';
import { NotFoundPage } from '~pages/shared/not-found';
import { SettingsPage } from '~pages/shared/settings';
import { RoutesUrls } from '~shared/lib/router';

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
    // element: <RequireAuth loginPath={RoutesUrls.login} />,
    element: <BaseLayout />,
    children: [
      {
        children: [
          { path: RoutesUrls.settings, element: <SettingsPage /> },
          { path: RoutesUrls.personalInfo, element: <p>Personal info</p> },
          { path: RoutesUrls.selectSpuz, element: <p>Select spuz</p> },
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
