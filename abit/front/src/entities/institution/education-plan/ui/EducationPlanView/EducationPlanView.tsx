import { useTranslation } from 'react-i18next';

import { IEducationPlan } from '~entities/institution/education-plan/model';
import { Table, TableColumnsType } from '~shared/ui';

interface IEducationPlanView {
  loading: boolean;
  educationPlans: IEducationPlan[];
  actionsSlot?: any;
  setEducationPlan: any;
}

export const EducationPlanView = ({
  loading,
  educationPlans,
  actionsSlot,
  setEducationPlan,
}: IEducationPlanView) => {
  const { t } = useTranslation();

  const columns: TableColumnsType<IEducationPlan> = [
    {
      title: '№',
      render: (_value, row, idx) => idx + 1,
      align: 'center',
      width: '55px',
    },
    {
      title: t('discipline:title'),
      dataIndex: 'discipline',
      key: 'discipline',
      render: (_value) => (
        <div className="text-left flex justify-between items-center gap-1 pr-1">
          <p>{_value}</p>
        </div>
      ),
      align: 'center',
    },
    {
      title: t('discipline:discipline_type'),
      dataIndex: 'discipline_type',
      key: 'discipline_type',
      render: (_value) => (
        <div className="text-left flex justify-between items-center gap-1 pr-1">
          <p>{_value}</p>
        </div>
      ),
      align: 'center',
      width: '100px',
    },
    {
      title: t('discipline:discipline_control'),
      dataIndex: 'discipline_control',
      key: 'discipline_control',
      render: (_value) => (
        <div className="text-left flex justify-between items-center gap-1 pr-1">
          <p>{_value}</p>
        </div>
      ),
      align: 'center',
      width: '100px',
    },
    {
      title: t('actions.actions'),
      dataIndex: 'operation',
      align: 'center',
      render: (_value, row, _index) => (
        <div
          onClick={() => setEducationPlan(row)}
          className="flex justify-center items-center gap-4"
        >
          {actionsSlot}
        </div>
      ),
      width: '100px',
    },
  ];

  return (
    <>
      <Table
        bordered
        size="small"
        dataSource={educationPlans}
        columns={columns}
        rowClassName="editable-row"
        pagination={false}
        scroll={{ y: 'calc(100vh - 214px)' }}
        rowKey={(obj) => obj.id_ep}
        loading={loading}
      />
    </>
  );
};
