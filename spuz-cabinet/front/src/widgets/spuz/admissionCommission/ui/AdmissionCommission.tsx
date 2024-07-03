import { useEffect } from 'react';

import {
  AdmissionCommissionListView,
  useSetAdmissionCommissionList,
} from '~entities/spuz/admission-commission';
import { useAdmissionCommissionList } from '~entities/spuz/admission-commission';

export const AdmissionCommission = () => {
  const admissionCommissionList = useAdmissionCommissionList();

  const setAdmissionCommissionList = useSetAdmissionCommissionList();

  useEffect(() => {
    setAdmissionCommissionList(138);
  }, []);

  return (
    <>
      <AdmissionCommissionListView
        list={admissionCommissionList || []}
        onDelete={() => console.log('delete')}
        onEdit={() => console.log('edit')}
      />
    </>
  );
};
