export type UseExitGuardProps = {
  currentUrl: string;
  confirmUrl: string;
  isDirty: boolean;
  onBlockLeave: (url: string) => void;
  onConfirmLeave: (url: string) => boolean | Promise<boolean> | void;
  selectors: string[];
};
