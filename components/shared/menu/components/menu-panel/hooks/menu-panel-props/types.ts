import { MenuPanelProps } from '../../types';

export interface UseMenuPanelProps extends MenuPanelProps {
  open: Record<string, boolean>;
  panelRef: React.RefObject<HTMLDivElement | null>;
  getTriggerRect: (id: string) => DOMRect;
  updateTriggerRect: (id: string) => void;
}
