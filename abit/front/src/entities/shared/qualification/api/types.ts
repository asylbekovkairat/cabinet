export interface ApiQualification {
  id_qualification: number;
  qualification_ky: string;
  qualification_ru: string;
  qualification_en: string;
}

export interface ApiQualificationsRequest {
  id_org_type: number;
}
export interface ApiQualificationsData {
  data: ApiQualification[];
}
