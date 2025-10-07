import { Placement } from '../../types';
import { RefObject } from 'react';
import { SizeWindow } from '../../utils';

export type UseScrollListenersProps = {
  getScrollParent: (element: HTMLElement | null) => HTMLElement | Window;
  getTrigger: (id: string) => HTMLElement | null;
  getTriggerRect: (id: string) => DOMRect;
  id: string;
  onCloseOnScroll: (id: string) => void;
  onSetPosition: (
    dynamic?: Placement,
    el?: SizeWindow,
    triggerPosition?: DOMRect
  ) => void;
  open: boolean;
  panelRef: RefObject<HTMLDivElement | null>;
  placement: Placement;
  updateTriggerRect: (id: string) => void;
  closeOnScroll?: boolean;
};
