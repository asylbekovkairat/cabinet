import { useTranslation } from 'react-i18next';

import { RoleType } from '~entities/shared/user';
import { withAccess } from '~shared/lib/router';
import { SeoHelmet } from '~shared/lib/seo';
import { DirectionsList } from '~widgets/institution/direction';

interface IDirectionPage {}

function DirectionPageContent({}: IDirectionPage) {
  const { t } = useTranslation();

  return (
    <>
      <SeoHelmet title={t('cm:routes.direction') || ''} />
      <DirectionsList />
    </>
  );
}

export const DirectionPage = withAccess([
  RoleType.employee,
  RoleType.organization,
  RoleType.supervisor,
])(DirectionPageContent);
