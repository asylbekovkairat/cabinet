export interface ApiEducationPeriodYear {
  id_education_period_year: number;
  education_period_year_ky: string;
  education_period_year_ru: string;
  education_period_year_en: string;
}

export interface ApiEducationPeriodYearsData {
  data: ApiEducationPeriodYear;
}

export interface ApiEducationPeriodMonth {
  id_education_period_month: number;
  education_period_month_ky: string;
  education_period_month_ru: string;
  education_period_month_en: string;
}

export interface ApiEducationPeriodMonthsData {
  data: ApiEducationPeriodMonth;
}

export interface ApiEducationPeriodRequest {}
