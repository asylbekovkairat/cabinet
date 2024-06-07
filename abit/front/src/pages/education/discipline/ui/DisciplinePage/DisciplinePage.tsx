import { useTranslation } from 'react-i18next';

import { RoleType } from '~entities/shared/user';
import { withAccess } from '~shared/lib/router';
import { SeoHelmet } from '~shared/lib/seo';
import { DisciplinesList } from '~widgets/education/discipline';

interface IDisciplinePage {}

function DisciplinePageContent({}: IDisciplinePage) {
  const { t } = useTranslation();

  return (
    <>
      <SeoHelmet title={t('cm:routes.discipline') || ''} />
      <DisciplinesList />
    </>
  );
}

export const DisciplinePage = withAccess([
  RoleType.employee,
  RoleType.organization,
  RoleType.supervisor,
])(DisciplinePageContent);
