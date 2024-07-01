import { useRoutes } from 'react-router-dom';

import { BaseLayout } from '~pages/layouts';
import { LoginPage } from '~pages/shared/login';
import { LogoutPage } from '~pages/shared/logout';
import { GeneralInfoPage, SpecialitiesPage } from '~pages/spuz';
import { RecruitmentPlanPage } from '~pages/spuz/RecruitmentPlan';
import { RequireAuth, RoutesUrls } from '~shared/lib/router';

const routes = [
  { path: RoutesUrls.login, element: <LoginPage /> },
  {
    path: RoutesUrls.root,
    element: <RequireAuth loginPath={RoutesUrls.login} />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          { path: RoutesUrls.generalInfo, element: <GeneralInfoPage /> },
          { path: RoutesUrls.specialities, element: <SpecialitiesPage /> },
          { path: RoutesUrls.recruitmentPlan, element: <RecruitmentPlanPage /> },
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
