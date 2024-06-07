export interface ApiDisciplineType {
  id_discipline_type: number;
  discipline_type_ky: string;
  discipline_type_ru: string;
  discipline_type_en: string;
}

export interface ApiDisciplineTypesData {
  data: ApiDisciplineType;
}

export interface ApiDisciplineTypesRequest {}
