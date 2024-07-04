import { FC, memo, useMemo } from 'react';

import { SelectProps } from 'antd';

import { Select } from '~shared/ui';

import { Employee } from '../../model';

interface EmployeeSelectorProps extends SelectProps {
  employeesList: Employee[];
}

export const EmployeeSelector: FC<EmployeeSelectorProps> = memo(
  ({ employeesList, ...restProps }) => {
    const renderOptions = useMemo(
      () =>
        employeesList.map(({ fio_users_university, id_users_university }) => ({
          label: fio_users_university,
          value: id_users_university,
        })),
      [employeesList]
    );

    return <Select options={renderOptions} {...restProps} />;
  }
);
