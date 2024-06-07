export interface ApiDirectionEditData {
  id_direction: number;
  faculty_id: number;
  direction_cipher: number;
  direction_ky: string;
  direction_ru: string;
  direction_en: string;
}

export interface ApiDirectionEditResponseData {
  data?: boolean;
  error?: boolean;
}
