import { useEffect, useState } from 'react';

import {
  RegistrationInfo,
  RegistrationsListView,
  useRegistrationsInfo,
  useSetRegistrationsInfo,
} from '~entities/registrations';
import { useUserEnrollOrt } from '~entities/shared/user';
import { ConfirmType, RegistrationsActionView } from '~features/registrationsAction';
import { SpuzFilterView } from '~features/spuz-filter';

const SelectSpuz = () => {
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
