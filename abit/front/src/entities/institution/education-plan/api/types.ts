export interface ApiEducationPlan {
  id_ep: number;
  id_discipline: number;
  discipline: string;
  id_discipline_type: number;
  discipline_type: string;
  discipline_control: string;
  ects: number;
  academic_hour: number;
}

export interface ApiEducationPlansData {
  data: ApiEducationPlan;
}

export interface ApiEducationPlansRequest {
  years_id: number;
  specialty_id: number;
  id_education_level: number;
}
