export type IRegionType = number;

export interface RegionItem {
  id_region: IRegionType;
  region_kg: string;
  region: string;
}

export interface RegionList extends Array<RegionItem> {}
