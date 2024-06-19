import { useEffect } from 'react';

import {
  MergedRegistrations,
  RegistrationsListView,
  useRegistrations,
  useSetRegistrations,
} from '~entities/registrations';
import { useUserEnrollOrt } from '~entities/shared/user';

export const ViewRegistrations = () => {
  const registrations = useRegistrations();
  const userEnrolleOrt = useUserEnrollOrt();

  const setRegistrations = useSetRegistrations();

  useEffect(() => {
    if (userEnrolleOrt?.NumberSert) {
      setRegistrations(userEnrolleOrt.NumberSert);
    }
  }, [userEnrolleOrt]);

  return <RegistrationsListView registrationList={(registrations as MergedRegistrations) || []} />;
};
