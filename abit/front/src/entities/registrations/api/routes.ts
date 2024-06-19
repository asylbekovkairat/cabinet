export const routes = {
  getRegistrationsHistory: (sertificate_id: number) =>
    `/getEnrolleeHistory?NumberSert=${sertificate_id}`,
  getRegistrationsHistoryInfo: (sertificate_id: number) =>
    `/getEnrolleeHistoryInfo?NumberSert=${sertificate_id}`,
};
