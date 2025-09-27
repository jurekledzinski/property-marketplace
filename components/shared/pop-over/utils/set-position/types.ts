import { Placement } from '../../types';

export type SetPositionParams = {
  autoWidth?: boolean;
  currentPlacement: Placement;
  size: { width: number; height: number };
  panelPosition: DOMRect;
  triggerPosition: DOMRect;
  panelWidth: number;
  panelHeight: number;
  panelStyle: CSSStyleDeclaration;
};
