export interface AdmissionPlan {
  id_admission_plan: number;
  id_years: number;
  id_specialty: number;
  id_bk: number;
  kol_plan: number;
  Beneficiary_plan: boolean;
  smeta_doki: number;
  smeta_education: number;
  id_discipline: number;
  internal_test: boolean;
  descriptions: string;
  medicine: boolean;
  voucher_plan: boolean;
}

export interface AdmissionPlans extends AdmissionPlan {
  specialty_cipher: string;
  specialty: string;
  bk: string;
  discipline: string;
}
