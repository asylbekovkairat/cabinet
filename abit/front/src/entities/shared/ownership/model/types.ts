export type IOwnershipType = number;

export interface OwnershipItem {
  id_ownership: IOwnershipType;
  ownership: string;
}

export interface OwnershipList extends Array<OwnershipItem> {}
