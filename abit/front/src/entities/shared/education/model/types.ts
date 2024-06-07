export type IEducationType = number;

export interface EducationItem {
  id_education: IEducationType;
  education: string;
}

export interface EducationList extends Array<EducationItem> {}
