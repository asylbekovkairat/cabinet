import { useTranslation } from 'react-i18next';

import { RoleType } from '~entities/shared/user';
import { withAccess } from '~shared/lib/router';
import { SeoHelmet } from '~shared/lib/seo';
import { EducationLaw } from '~widgets/shared/education-law';
import { UsingManual } from '~widgets/shared/using-manual';

function MainPageContent() {
  const { t } = useTranslation();

  return (
    <>
      <SeoHelmet title={t('cm:routes.main')} />
      <div className="flex flex-wrap gap-5 max-w-[1178px]">
        <EducationLaw />
        <div className="flex sm:flex-wrap gap-5 w-full">
          <UsingManual />
        </div>
      </div>
    </>
  );
}

export const MainPage = withAccess([
  RoleType.employee,
  RoleType.organization,
  RoleType.supervisor,
  RoleType.ministry,
  RoleType.printing_house,
])(MainPageContent);
