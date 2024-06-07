export interface ApiDisciplineControl {
  id_discipline_control: number;
  discipline_control_ky: string;
  discipline_control_ru: string;
  discipline_control_en: string;
}

export interface ApiDisciplineControlsData {
  data: ApiDisciplineControl;
}

export interface ApiDisciplineControlsRequest {}
