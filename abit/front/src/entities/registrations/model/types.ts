export interface Registration {
  tours: number;
  id_bk: number;
  bk: string;
  specialty: string;
  status: string;
  fio: string;
  telefon: string;
}

export interface RegistrationInfo extends Registration {
  id_ReceptInfo: number;
  id_admission_plan: number;
  id_enrollee_ORT: number;
  NumberSert: string;
  Beneficiary_plan: boolean;
  Confirm_enrollee: boolean;
  Recom_for_reccept: boolean;
  visible_button_confirm: boolean;
  visible_button_zabra: boolean;
}

export type MergedRegistrations = RegistrationInfo[] & Registration[];
