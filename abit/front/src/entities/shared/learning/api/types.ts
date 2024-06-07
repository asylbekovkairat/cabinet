export interface ApiLearning {
  id_learning: number;
  learning_ky: string;
  learning_ru: string;
  learning_en: string;
}
export interface ApiLearningsData {
  data: ApiLearning[];
}
