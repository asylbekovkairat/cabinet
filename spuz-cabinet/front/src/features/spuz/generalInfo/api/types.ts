export interface Spuz {
  id_university: number;
  id_region: number;
  s_university: string;
  university_name: string;
  university_address: string;
  university_url?: string; // Optional property for URL (might be missing)
  university_supervisor: string;
  supervisor_position: string;
  s_university_kg: string;
  university_name_kg: string;
  university_sort: number;
  voucher: number;
  area: number;
  student: number;
  plan: number;
}
