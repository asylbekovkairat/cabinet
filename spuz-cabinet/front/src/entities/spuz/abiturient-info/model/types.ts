export interface Abiturient {
  id_abiturient: number;
  id_enrollee_ORT?: number; // Optional field
  beneficiary_status: boolean;
  surname: string;
  names: string;
  patronymic: string;
  birthdate: string; // Date in UTC format
  male: boolean;
  serial_pas: string;
  number_pas?: string; // Optional field (possibly null)
  date_given_pas: string; // Date in UTC format
  inn: string;
  StreetHomeAddress: string;
  SeriesAD: string;
  NumberAD: string;
  id_abiturient_category: number;
  logInsert: string; // Datetime in UTC format
  id_learning: number;
  photoAtestA: string;
  photoAtestB: string;
  documentA: string;
  documentB: string;
  documentLigot?: string; // Optional field (possibly null)
  email: string;
  id_user: number;
  id_role: number;
  citizenship: boolean;
}
