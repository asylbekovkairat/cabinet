export const routes = {
  getAdmissionPlan: (id_specialty: number, id_bk: number) =>
    `/vuz/getAdmissionPlanInfo?id_specialty=${id_specialty}&id_bk=${id_bk}`,

  getAdmissionPlanList: (id_university: number, id_learning: number) =>
    `/vuz/getAdmissionPlanSpisok?id_university=${id_university}&id_learning=${id_learning}`,

  getAdminPlan: (id_specialty: number, id_bk: number) =>
    `/vuz/getIdAdminPlan?id_specialty=${id_specialty}&id_bk=${id_bk} `,
};
