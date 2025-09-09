export type UseExitGuardProps = {
  currentUrl: string;
  confirmUrl: string;
  isDirty: boolean;
  onBlockLeave: (url: string) => void;
  onConfirmLeave: (url: string) => void;
  selectors: string[];
};
