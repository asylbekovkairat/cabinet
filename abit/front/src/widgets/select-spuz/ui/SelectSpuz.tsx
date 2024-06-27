import { Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  RegistrationInfo,
  RegistrationsListView,
  useRegistrationsInfo,
  useSetRegistrationsInfo,
} from '~entities/registrations';
import { useUserEnrollOrt } from '~entities/shared/user';
import { ConfirmType, RegistrationsActionView } from '~features/registrationsAction';
import { SpuzFilterView } from '~features/spuz-filter';
import { RoutesUrls } from '~shared/lib/router';

const SelectSpuz = () => {
  const { t } = useTranslation();
  const registrations = useRegistrationsInfo();
  const userEnrolleOrt = useUserEnrollOrt();

  const setRegistrations = useSetRegistrationsInfo();

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const [registrationInfo, setRegistrationInfo] = useState<RegistrationInfo>();
  const [actionType, setActionType] = useState<ConfirmType>(ConfirmType.confirm);

  useEffect(() => {
    loadRegistrations();
  }, [userEnrolleOrt]);

  const loadRegistrations = () => {
    if (userEnrolleOrt?.NumberSert) {
      setRegistrations(userEnrolleOrt.NumberSert);
    }
  };

  const onActionViewOpen = (data: RegistrationInfo, type: ConfirmType) => {
    setOpenConfirmModal(true);
    setRegistrationInfo(data);
    setActionType(type);
  };

  const onActionViewClose = () => setOpenConfirmModal((prev) => !prev);

  return (
    <>
      <Breadcrumb
        className="text-[16px] mb-8"
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
        ]}
      />
      <RegistrationsActionView
        open={openConfirmModal}
        info={registrationInfo}
        onActionViewClose={onActionViewClose}
        loadRegistrations={loadRegistrations}
        actionType={actionType}
      />
      <SpuzFilterView loadRegistrations={loadRegistrations} />
      <RegistrationsListView
        registrationList={registrations || []}
        onActionViewOpen={onActionViewOpen}
      />
    </>
  );
};

export default SelectSpuz;
