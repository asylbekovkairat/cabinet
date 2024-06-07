export interface ApiSpecialty {
  id_specialty: number;
  specialty_cipher: string;
  specialty_ky: string;
  specialty_ru: string;
  specialty_en: string;
  id_learning: number;
  learning: string;
  id_industry: number;
  id_qualification: number;
  education_period: string;
  id_direction: number;
  qualification: string;
}

export interface ApiSpecialtiesData {
  data: ApiSpecialty;
}

export interface ApiSpecialtiesRequest {
  id_direction: number;
}
