export interface User {
  exp: any;
  type: number;
  s: string;
  n: string;
  p: string | null;
  pin: string | number;
  org: number;
  orgTypeId: number;
}

export interface UserFio {
  id_university: number;
  fio_users: string;
  error?: string;
}
