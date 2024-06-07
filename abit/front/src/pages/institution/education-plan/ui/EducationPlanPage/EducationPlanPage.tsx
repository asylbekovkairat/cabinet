import { useTranslation } from 'react-i18next';

import { RoleType } from '~entities/shared/user';
import { withAccess } from '~shared/lib/router';
import { SeoHelmet } from '~shared/lib/seo';
import { EducationPlanList } from '~widgets/institution/education-plan';

interface IEducationPlanPage {}

function EducationPlanPageContent({}: IEducationPlanPage) {
  const { t } = useTranslation();

  return (
    <>
      <SeoHelmet title={t('cm:routes.direction') || ''} />
      <EducationPlanList />
    </>
  );
}

export const EducationPlanPage = withAccess([
  RoleType.employee,
  RoleType.organization,
  RoleType.supervisor,
])(EducationPlanPageContent);
