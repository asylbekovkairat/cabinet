export interface ApiEducationLevel {
  id_education_level: number;
  education_level_ky: string;
  education_level_ru: string;
  education_level_en: string;
}

export interface ApiEducationLevelsData {
  data: ApiEducationLevel;
}

export interface ApiEducationLevelsRequest {}
