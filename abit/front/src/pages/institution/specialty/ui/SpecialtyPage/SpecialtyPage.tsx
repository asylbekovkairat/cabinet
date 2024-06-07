import { useTranslation } from 'react-i18next';

import { RoleType } from '~entities/shared/user';
import { withAccess } from '~shared/lib/router';
import { SeoHelmet } from '~shared/lib/seo';
import { SpecialtiesList } from '~widgets/institution/specialty';

interface ISpecialtyPage {}

function SpecialtyPageContent({}: ISpecialtyPage) {
  const { t } = useTranslation();

  return (
    <>
      <SeoHelmet title={t('cm:routes.direction') || ''} />
      <SpecialtiesList />
    </>
  );
}

export const SpecialtyPage = withAccess([
  RoleType.employee,
  RoleType.organization,
  RoleType.supervisor,
])(SpecialtyPageContent);
