import { useRoutes } from 'react-router-dom';

import { BaseLayout } from '~pages/layouts';
import { LoginPage } from '~pages/shared/login';
import { LogoutPage } from '~pages/shared/logout';
import { RequireAuth, RoutesUrls, lazyLoader } from '~shared/lib/router';

// PersonalInfoPage

const PersonalInfoPage = lazyLoader(() =>
  import('~pages/personal-info').then((module) => ({ default: module.PersonalInfoPage }))
);

const SelectSpuzPage = lazyLoader(() =>
  import('~pages/select-spuz').then((module) => ({ default: module.SelectSpuzPage }))
);

const routes = [
  {
    path: RoutesUrls.cabinet,
    element: <RequireAuth loginPath={RoutesUrls.login} />,
    children: [
      {
        element: <BaseLayout />,
        children: [
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
  { path: RoutesUrls.login, element: <LoginPage /> },
];

export const Router = () => {
  const routeElement = useRoutes(routes);

  return routeElement;
};
