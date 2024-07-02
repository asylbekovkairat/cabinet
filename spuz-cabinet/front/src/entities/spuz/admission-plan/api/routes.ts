export const routes = {
  getAdmissionPlan: (id_specialty: number, id_bk: number) =>
    `/vuz/getAdmissionPlanInfo?id_specialty=${id_specialty}&id_bk=${id_bk}`,
};
