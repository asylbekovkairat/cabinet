import { useState } from 'react';

import { AdmissionCommission } from '~widgets/spuz/admissionCommission';
import { EmployeesAccess } from '~widgets/spuz/employeesAccess';

export const AdmissionCommissionPage = () => {
  const [isAccessEmployee, setIsAccessEmployee] = useState<boolean>(false);

  const openAccessEmployees = () => setIsAccessEmployee(true);
  const goBack = () => setIsAccessEmployee(false);

  if (isAccessEmployee) {
    return <EmployeesAccess goBack={goBack} />;
  }

  return <AdmissionCommission openAccessEmployees={openAccessEmployees} />;
};
