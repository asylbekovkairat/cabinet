export interface ApiSignInData {
  login: string;
  password: string;
}

export enum RoleType {
  ministry = 'ministry',
  printing_house = 'printing_house',
  supervisor = 'supervisor',
  employee = 'employee',
  rayono = 'rayono',
  diplom = 'diplom',
}

interface AuthState {
  s: string;
  n: string;
  p: string;
  pin: string | number;
  exp: number;
  type: number;
  org: number;
  role: RoleType[];
  okpo: string;
  orgTypeId: number;
}

export interface ApiSignInResponseData {
  token: string;
  expiresIn: number;
  tokenType: string;
  authState: AuthState;
}
