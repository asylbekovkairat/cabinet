export type ConfirmRegistration = {
  id_admission_plan: number | undefined;
  NumberSert: string | null | undefined;
  tour: number | undefined;
  bk: number | undefined;
  lang: number;
};

export type RegisterData = {
  NumberSert: string | null | undefined;
  tour: number;
  bk: number;
  lang: number;
};
