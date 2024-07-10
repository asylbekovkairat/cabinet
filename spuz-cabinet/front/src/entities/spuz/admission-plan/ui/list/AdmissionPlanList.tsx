import { FC, memo, useMemo } from 'react';

import { Empty } from 'antd';

import { AdmissionPlans } from '../../model';
import AdmissionPlanCardView from '../card/AdmissionPlanCardView';

interface AdmissionPlanListProps {
  list: AdmissionPlans[];
}

const AdmissionPlanListView: FC<AdmissionPlanListProps> = memo(({ list }) => {
  const renderContractAdmission = list
    .filter((item) => item.id_bk === 2)
    .map((item) => <AdmissionPlanCardView key={item.id_admission_plan} info={item} />);

  const renderBudgetAdmission = list
    .filter((item) => item.id_bk === 1)
    .map((item) => <AdmissionPlanCardView key={item.id_admission_plan} info={item} />);

  if (!list.length) {
    return <Empty />;
  }

  return (
    <section className="flex gap-6 xs:flex-col">
      <div className="flex flex-col gap-6 w-1/2 xs:w-full">{renderBudgetAdmission}</div>
      <div className="flex flex-col gap-6 w-1/2 xs:w-full">{renderContractAdmission}</div>
    </section>
  );
});

export default AdmissionPlanListView;
