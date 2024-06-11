export interface Abiturient {
  id_abiturient: number;
  id_enrollee_ORT: number;
  beneficiary_status: boolean;
  surname: string;
  names: string;
  patronymic: string;
  birthdate: string; // or Date if you prefer to handle dates as Date objects
  male: boolean;
  serial_pas: string;
  number_pas: string | null;
  date_given_pas: string; // or Date if you prefer to handle dates as Date objects
  inn: string;
  StreetHomeAddress: string | null;
  SeriesAD: string | null;
  NumberAD: string | null;
  id_abiturient_category: number;
  logInsert: string; // or Date if you prefer to handle dates as Date objects
  id_learning: number;
  photoAtestA: string;
  photoAtestB: string | null;
  documentA: string;
  documentB: string | null;
  documentLigot: string | null;
  email: string;
  id_user: number;
  id_role: number;
  citizenship: boolean;
}
