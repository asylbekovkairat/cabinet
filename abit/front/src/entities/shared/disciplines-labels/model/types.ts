export interface DisciplineLabelItem {
  discipline_dop_name_ru?: string;
  discipline_dop_name_ky?: string;
  id_discipline_dop_name: number;
}

export interface DisciplinesLabelsList extends Array<DisciplineLabelItem> {}
