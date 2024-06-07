export type IdDistrictType = number | null;

export interface DistrictItem {
  id_district: IdDistrictType;
  district_ky: string;
  district_ru: string;
}

export interface DistrictList extends Array<DistrictItem> {}
