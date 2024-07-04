import { Button } from 'antd';
import { FC, useState } from 'react';

import {
  EmployeesAccessListView,
  useEmployeesAccessList,
  useSetEmployeesAccessList,
} from '~entities/spuz/employee-access';

import { AddEmployeessAccessView } from '~features/spuz/employeeAccess';
import { removeEmployeeAccess } from '~features/spuz/employeeAccess/api';
import { ArrowLeftIcon } from '~shared/ui';

interface EmployeesAccessProps {
  goBack: () => void;
}

const EmployeesAccess: FC<EmployeesAccessProps> = ({ goBack }) => {
  const employeeAccessList = useEmployeesAccessList();
  const setEmployeesAccess = useSetEmployeesAccessList();

  const [employeeId, setEmployeeId] = useState<number | null>(null);

  const loadEmployeesAccess = (id: number) => setEmployeesAccess(id);

  const onDelete = async (id: number) => {
    await removeEmployeeAccess(id);

    if (employeeId) {
      loadEmployeesAccess(employeeId);
    }
  };

  return (
    <>
      <Button
        className="p-0 flex items-center w-min !bg-transparent border-none"
        icon={<ArrowLeftIcon />}
        onClick={goBack}
      >
        Вернуться назад
      </Button>
      <AddEmployeessAccessView
        loadEmployeesAccess={loadEmployeesAccess}
        setEmployeeId={setEmployeeId}
      />
      <EmployeesAccessListView list={employeeAccessList?.reverse() || []} onDelete={onDelete} />
    </>
  );
};

export default EmployeesAccess;
