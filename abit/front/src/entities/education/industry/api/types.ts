export interface ApiEducationIndustry {
  id_industry: number;
  industry_ky: string;
  industry_ru: string;
  industry_en: string;
}

export interface ApiEducationIndustriesData {
  data: ApiEducationIndustry;
}

export interface ApiEducationIndustryRequest {}
