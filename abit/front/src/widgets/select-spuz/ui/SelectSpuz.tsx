import { useEffect, useState } from 'react';

import {
  RegistrationsListView,
  useRegistrationsInfo,
  useSetRegistrationsInfo,
} from '~entities/registrations';
import { useUserEnrollOrt } from '~entities/shared/user';
import { RegistrationsConfirmView } from '~features/registrationsConfirm';
import { SpuzFilterView } from '~features/spuz-filter';

const SelectSpuz = () => {
  const registrations = useRegistrationsInfo();
  const userEnrolleOrt = useUserEnrollOrt();

  const setRegistrations = useSetRegistrationsInfo();

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

  useEffect(() => {
    loadRegistrations();
  }, [userEnrolleOrt]);

  const loadRegistrations = () => {
    if (userEnrolleOrt?.NumberSert) {
      setRegistrations(userEnrolleOrt.NumberSert);
    }
  };

  const onConfirmOpen = () => setOpenConfirmModal(true);
  const onConfirmClose = () => setOpenConfirmModal((prev) => !prev);

  return (
    <>
      <RegistrationsConfirmView open={openConfirmModal} onClose={onConfirmClose} />
      <SpuzFilterView loadRegistrations={loadRegistrations} />
      <RegistrationsListView registrationList={registrations || []} onConfirm={onConfirmOpen} />
    </>
  );
};

export default SelectSpuz;
