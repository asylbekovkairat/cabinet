import { useRoutes } from 'react-router-dom';

import { BaseLayout } from '~pages/layouts';
import { LoginPage } from '~pages/shared/login';
import { LogoutPage } from '~pages/shared/logout';
import { GeneralInfoPage, SpecialitiesPage } from '~pages/spuz';
import { AdmissionCommissionPage } from '~pages/spuz/AdmissionCommission';
import { AdmissionPlanPage } from '~pages/spuz/AdmissionPlan';
import { AdmissionPlanListPage } from '~pages/spuz/AdmissionPlanList';
import { AttestatPage } from '~pages/spuz/Attestat';
import { ConfirmCandidatePage } from '~pages/spuz/ConfirmCandidate';
import { GrantCommissionPage } from '~pages/spuz/GrantCommission';
import { RecommendCandidatePage } from '~pages/spuz/RecommendCandidate';
import { RegisterAbiturientPage } from '~pages/spuz/RegisterAbiturient';
import { SearchByPinPage } from '~pages/spuz/SearchByPin';
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
          { path: RoutesUrls.admissionPlan, element: <AdmissionPlanPage /> },
          { path: RoutesUrls.admissionPlanList, element: <AdmissionPlanListPage /> },
          { path: RoutesUrls.admissionCommission, element: <AdmissionCommissionPage /> },
          { path: RoutesUrls.grantCommission, element: <GrantCommissionPage /> },
          { path: RoutesUrls.attestat, element: <AttestatPage /> },
          { path: RoutesUrls.recommend, element: <RecommendCandidatePage /> },
          { path: RoutesUrls.confirmCandidate, element: <ConfirmCandidatePage /> },
          { path: RoutesUrls.searchByPin, element: <SearchByPinPage /> },
          { path: RoutesUrls.registerAbiturient, element: <RegisterAbiturientPage /> },
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
