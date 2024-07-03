export interface AdmissionUser {
  id_users_university: number;
  fio_users_university: string;
  login_university: string;
  official_phone?: string; // Optional phone number
  mobile_phone: string;
  whatsapp?: string; // Optional whatsapp number
  telegram?: string; // Optional telegram username
  email: string;
  instagram?: string; // Optional instagram URL
  facebook?: string; // Optional facebook URL
}
