export type ContextPopOver = {
  onClose: (id: string) => void;
  onCloseAll: () => void;
  onToggle: (id: string) => void;
  open: Record<string, boolean>;
  mapRefs: React.RefObject<Map<string, HTMLElement>>;
  triggerRefs: React.RefObject<Record<string, HTMLElement | null>>;
  registerTriggerRef: (node: HTMLElement | null, id: string) => void;
  getTriggerRect: (id: string) => DOMRect;
  refreshTriggerRect: (id: string) => void;
};

export type PopOverProviderProps = {
  children: React.ReactNode;
};
