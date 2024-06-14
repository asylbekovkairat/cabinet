import { mode } from 'crypto-js';
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

const RegistrationsPage = lazyLoader(() =>
  import('~pages/registrations').then((module) => ({ default: module.Registrations }))
);

const ToursChartPage = lazyLoader(() =>
  import('~pages/tours-chart').then((module) => ({ default: module.ToursChart }))
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
          { path: RoutesUrls.viewRegistrations, element: <RegistrationsPage /> },
          { path: RoutesUrls.tours, element: <ToursChartPage /> },
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
