import { SaveAbitType } from './types';

export const routes = {
  updateAbitDiscUpd: ({ id_abit_discip, ball_new }: { id_abit_discip: number; ball_new: number }) =>
    `/vuz/getAbitDiscUpd?id_abit_discip=${id_abit_discip}&ball_new=${ball_new}`,

  saveAbitInfo: ({ id_abiturient, id_admission_plan, tests_ball, tour }: SaveAbitType) =>
    `/vuz/SPAbiturientDisciplineFull?id_abiturient=${id_abiturient}&id_admission_plan=${id_admission_plan}&tests_ball=${tests_ball}&tour=${tour}`,
};
