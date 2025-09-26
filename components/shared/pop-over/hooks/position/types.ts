import { ReturnPosition } from '@/components';
import { Placement } from '../../types';

export type SizeWindow = {
  w: number;
  h: number;
};

export type CommonPanelProps = {
  id: string;
  gap?: number;
  autoWidth?: boolean;
  placement?: Placement;
};

export interface UsePositionProps extends CommonPanelProps {
  open: boolean;
  panelRef: React.RefObject<HTMLDivElement | null>;
  getTrigger: (id: string) => HTMLElement | null;
  getTriggerRect: (id: string) => DOMRect;
  updateTriggerRect: (id: string) => void;
  type?: 'floating' | 'expand' | 'slide';
}

// ---- Helper functions ----

type SetNewPositionParams = {
  autoWidth: boolean;
  gap: number;
  panelRef: React.RefObject<HTMLDivElement | null>;
  updatedPosition: ReturnPosition;
  mainDirection: string;
};

export type SetNewPosition = ({
  panelRef,
  updatedPosition,
  mainDirection,
  gap,
}: SetNewPositionParams) => void;

type CommonCheckOrientation = {
  canPlaceRight: boolean;
  canPlaceLeft: boolean;
  canPlaceTop: boolean;
  canPlaceBottom: boolean;
  mainDirection: string;
  currentPlacement: Placement;
  mainDefault: string;
  alignment: string;
};

export type CheckHorizontalSpace = (
  params: Omit<CommonCheckOrientation, 'canPlaceTop' | 'canPlaceBottom'>
) => Placement | undefined;

export type CheckVerticalSpace = (
  params: Omit<CommonCheckOrientation, 'canPlaceRight' | 'canPlaceLeft'>
) => Placement | undefined;
