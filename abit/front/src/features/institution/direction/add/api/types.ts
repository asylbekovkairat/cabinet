export interface ApiDirectionAddData {
  faculty_id: number;
  direction_cipher: number;
  direction_ky: string;
  direction_ru: string;
  direction_en: string;
}

export interface ApiDirectionAddResponseData {
  data?: boolean;
  error?: boolean;
}
