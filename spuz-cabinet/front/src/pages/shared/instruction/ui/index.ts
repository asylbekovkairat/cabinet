import { lazyLoader } from '~shared/lib/utils';

export const InstructionPage = lazyLoader(() =>
  import('./Instruction').then((module) => ({ default: module.InstructionContent }))
);
