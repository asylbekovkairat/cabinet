export type ConfirmParams = {
  id_ReceptInfo: number | undefined;
};

export enum ConfirmType {
  confirm = 'ConfirmEnrolle',
  deny = 'TakeBackEnrolle',
}
