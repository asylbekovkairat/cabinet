export interface ApiDiscipline {
  id_discipline: number;
  discipline_ky: string;
  discipline_ru: string;
  discipline_en: string;
}

export interface ApiDisciplinesData {
  data: ApiDiscipline;
}

export interface ApiDisciplinesRequest {
  id_org: number;
}
