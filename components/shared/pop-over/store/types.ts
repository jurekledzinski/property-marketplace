export type ContextPopOver = {
  getTrigger: (id: string) => HTMLElement | null;
  getTriggerRect: (id: string) => DOMRect;
  mapKeys: React.RefObject<Map<string, HTMLElement>>;
  onClose: (id: string) => void;
  onCloseAll: () => void;
  onDeleteKey: (id: string) => void;
  onSetKey: (id: string, ref: HTMLElement | null) => void;
  onToggle: (id: string) => void;
  open: Record<string, boolean>;
  setTrigger: (id: string, node: HTMLElement | null) => void;
  triggers: React.RefObject<Record<string, HTMLElement | null>>;
  updateTriggerRect: (id: string) => void;
};

export type PopOverProviderProps = {
  children: React.ReactNode;
};
