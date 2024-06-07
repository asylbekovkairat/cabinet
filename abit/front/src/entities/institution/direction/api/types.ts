export interface ApiDirection {
  id_direction: number;
  direction_cipher: string;
  direction_ky: string;
  direction_ru: string;
  direction_en: string;
}

export interface ApiDirectionsData {
  data: ApiDirection;
}

export interface ApiDirectionsRequest {
  faculty_id: number;
}
