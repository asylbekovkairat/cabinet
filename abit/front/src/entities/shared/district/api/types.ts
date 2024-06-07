export interface ApiDistrictRequest {
  region: number | null;
}
export interface ApiDistrictItem {
  id_district: number;
  district_ky: string;
  district_ru: string;
}
export interface ApiDistrictData extends Array<ApiDistrictItem> {}
