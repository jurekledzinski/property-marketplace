export type ContextPopOver = {
  onClose: (id: string) => void;
  onCloseAll: () => void;
  onToggle: (id: string) => void;
  open: Record<string, boolean>;
  mapRefs: React.RefObject<Map<string, HTMLElement>>;
  triggers: React.RefObject<Record<string, HTMLElement | null>>;
  setTrigger: (node: HTMLElement | null, id: string) => void;
  getTrigger: (id: string) => HTMLElement | null;
  getTriggerRect: (id: string) => DOMRect;
  updateTriggerRect: (id: string) => void;
};

export type PopOverProviderProps = {
  children: React.ReactNode;
};
