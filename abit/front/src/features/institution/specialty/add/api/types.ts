export interface ApiSpecialtyAddData {
  specialty_cipher: string;
  specialty_ky: string;
  specialty_ru: string;
  specialty_en: string;
  id_learning: number;
  id_industry: number;
  id_qualification: number;
  id_direction: number;
  id_education_period_year: number;
  id_education_period_month: number;
}

export interface ApiSpecialtyAddResponseData {
  data?: boolean;
  error?: boolean;
}
