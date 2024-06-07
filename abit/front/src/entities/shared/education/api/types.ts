export interface IEducation {
  id_education: number;
  education: string;
}
export interface ApiEducationData {
  data?: IEducation[];
  error?: boolean;
}
