export interface AttestatCandidate {
  id_admin_plan: number;
  id_ReceptInf: number;
  id_abit: number;
  pin: string;
  id_enrollee: number;
  id_learn: number;
  special: string;
  fio: string;
  telefon: string;
  birthdate: string;
  attestat: string;
  srBall: number;
  ballDiscipline: number;
  internal_test: boolean;
  id_additional_tests: number | null;
  testsBall: number;
  summ: number;
  DateReg: string;
  karandash: number;
}

export type AttestatCandidateParams = {
  id_university: number;
  id_admission_plan: number;
  tour: number;
  id_bk: number;
};
