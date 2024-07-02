import { AdmissionPlanListView, useAdmissionPlanList } from '~entities/spuz/admission-plan';
import { AdmissionPlansFilterView } from '~features/spuz/admissionPlan';

const AdmissionPlanList = () => {
  const admissionPlanList = useAdmissionPlanList();

  return (
    <>
      <AdmissionPlansFilterView />
      <AdmissionPlanListView list={admissionPlanList || []} />
    </>
  );
};

export default AdmissionPlanList;
