export enum RoleType {
  ministry = 'ministry',
  printing_house = 'printing_house',
  supervisor = 'supervisor',
  employee = 'employee',
  organization = 'organization',
  rayono = 'rayono',
  diplom = 'diplom',
}
export interface User {
  type: number;
  s: string;
  n: string;
  p: string | null;
  pin: string | number;
  org: number;
  role: RoleType[];
  exp: number;
  okpo: string;
  orgTypeId: number;
}
