import { useRoutes } from 'react-router-dom';

import { BaseLayout, SiteLayout } from '~pages/layouts';
import { HomePage } from '~pages/shared/home';
import { LoginPage } from '~pages/shared/login';
import { LogoutPage } from '~pages/shared/logout';
import { NotFoundPage } from '~pages/shared/not-found';
import { SettingsPage } from '~pages/shared/settings';
import { RequireAuth, RoutesUrls, lazyLoader } from '~shared/lib/router';

const MainPage = lazyLoader(() =>
  import('~pages/shared/main').then((module) => ({
    default: module.MainPage,
  }))
);

const OrganizationPage = lazyLoader(() =>
  import('~pages/institution/organization').then((module) => ({ default: module.OrganizationPage }))
);

const FacultyPage = lazyLoader(() =>
  import('~pages/institution/faculty').then((module) => ({ default: module.FacultyPage }))
);

const DirectionPage = lazyLoader(() =>
  import('~pages/institution/direction').then((module) => ({ default: module.DirectionPage }))
);

const SpecialtyPage = lazyLoader(() =>
  import('~pages/institution/specialty').then((module) => ({ default: module.SpecialtyPage }))
);

const DisciplinePage = lazyLoader(() =>
  import('~pages/education/discipline').then((module) => ({ default: module.DisciplinePage }))
);

const EmployeesPage = lazyLoader(() =>
  import('~pages/institution/employee').then((module) => ({ default: module.EmployeesPage }))
);

const EducationPlanPage = lazyLoader(() =>
  import('~pages/institution/education-plan').then((module) => ({
    default: module.EducationPlanPage,
  }))
);

const routes = [
  {
    path: RoutesUrls.root,
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
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
          { path: RoutesUrls.main, element: <MainPage /> },
          { path: RoutesUrls.organization, element: <OrganizationPage /> },
          { path: RoutesUrls.faculty, element: <FacultyPage /> },
          { path: RoutesUrls.direction, element: <DirectionPage /> },
          { path: RoutesUrls.specialty, element: <SpecialtyPage /> },
          { path: RoutesUrls.disciplines, element: <DisciplinePage /> },
          { path: RoutesUrls.employees, element: <EmployeesPage /> },
          { path: RoutesUrls.curriculum, element: <EducationPlanPage /> },
          { path: RoutesUrls.settings, element: <SettingsPage /> },
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
