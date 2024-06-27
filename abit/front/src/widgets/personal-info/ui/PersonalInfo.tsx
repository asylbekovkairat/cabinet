import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useUserEnrollOrt } from '~entities/shared/user';

import { AbitInfoForm, UploadAbitDocs } from '~features/AbitInfoForm';
import { RoutesUrls } from '~shared/lib/router';

const PersonalInfo = () => {
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
              <Link className="!text-[#D87E2E]" to={RoutesUrls.selectSpuz}>
                {t('cm:routes.selectSpuz')}
              </Link>
            ),
          },
        ]}
      />
      <AbitInfoForm />
      <UploadAbitDocs />
    </>
  );
};

export default PersonalInfo;
