import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import { useUserEnrollOrt } from '~entities/shared/user';

import { RoutesUrls } from '~shared/lib/router';

import { ViewRegistrations } from '~widgets/view-registrations';

const Registrations = () => {
  const { t } = useTranslation();
  const userEnrolleOrt = useUserEnrollOrt();

  return (
    <>
      <Breadcrumb
        className="text-[16px]"
        items={[
          {
            title: `Шифр ${userEnrolleOrt.NumberSert}`,
          },
          {
            title: (
              <Link className="!text-[#D87E2E]" to={RoutesUrls.personalInfo}>
                {t('cm:routes.personalInfo')}
              </Link>
            ),
          },
          {
            title: (
              <Link className="!text-[#D87E2E]" to={RoutesUrls.selectSpuz}>
                {t('cm:routes.selectSpuz')}
              </Link>
            ),
          },
        ]}
      />
      <ViewRegistrations />;
    </>
  );
};

export default Registrations;
