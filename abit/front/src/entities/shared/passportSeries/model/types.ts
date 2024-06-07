export type IdPassportSeriesType = number;

export interface PassportSeriesItem {
  id_passport_series: IdPassportSeriesType;
  passport_series: string;
}

export interface PassportSeriesList extends Array<PassportSeriesItem> {}
