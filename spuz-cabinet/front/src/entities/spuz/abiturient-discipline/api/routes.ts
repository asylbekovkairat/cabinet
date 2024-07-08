export const routes = {
  getAbitRegDisc: ({
    id_learning,
    id_admission_plan,
    id_abiturient,
    tour,
  }: Record<string, number>) =>
    `/vuz/getAbitRegDisc?id_learning=${id_learning}&id_admission_plan=${id_admission_plan}&id_abiturient=${id_abiturient}&tour=${tour}`,
};
