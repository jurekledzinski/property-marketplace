import { Placement } from '../../types';

export type CommonPanelProps = {
  id: string;
  autoWidth?: boolean;
  gap?: number;
  placement?: Placement;
};

export interface UsePositionProps extends CommonPanelProps {
  getTrigger: (id: string) => HTMLElement | null;
  getTriggerRect: (id: string) => DOMRect;
  onCloseOnScroll: (id: string) => void;
  open: boolean;
  panelRef: React.RefObject<HTMLDivElement | null>;
  updateTriggerRect: (id: string) => void;
  closeOnScroll?: boolean;
  type?: 'floating' | 'expand' | 'slide';
}
