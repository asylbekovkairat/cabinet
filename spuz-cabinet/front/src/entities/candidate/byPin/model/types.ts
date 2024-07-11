export interface CandidateByPin {
  inn: string;
  fio: string;
  beneficiary: boolean;
  passport: {
    series: string;
    date: string;
  };
  attestat: string;
  telefon: string;
  address: string;
  tour: number;
  spec: string;
  status: string;
}
