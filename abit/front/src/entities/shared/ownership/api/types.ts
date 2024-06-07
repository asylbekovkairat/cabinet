export interface IOwnership {
  id_ownership: number;
  ownership: string;
}
export interface ApiOwnershipData {
  data?: IOwnership[];
  error?: boolean;
}
