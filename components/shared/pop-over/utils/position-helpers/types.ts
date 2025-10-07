import { ReturnPosition } from '@/components';
import { Placement } from '../../types';

export type SizeWindow = {
  h: number;
  w: number;
};

type SetNewPositionParams = {
  autoWidth: boolean;
  gap: number;
  mainDirection: string;
  panelRef: React.RefObject<HTMLDivElement | null>;
  updatedPosition: ReturnPosition;
};

export type SetNewPosition = ({
  panelRef,
  updatedPosition,
  mainDirection,
  gap,
}: SetNewPositionParams) => void;

type CommonCheckOrientation = {
  alignment: string;
  canPlaceBottom: boolean;
  canPlaceLeft: boolean;
  canPlaceRight: boolean;
  canPlaceTop: boolean;
  currentPlacement: Placement;
  mainDefault: string;
  mainDirection: string;
};

export type CheckHorizontalSpace = (
  params: Omit<CommonCheckOrientation, 'canPlaceTop' | 'canPlaceBottom'>
) => Placement | undefined;

export type CheckVerticalSpace = (
  params: Omit<CommonCheckOrientation, 'canPlaceRight' | 'canPlaceLeft'>
) => Placement | undefined;
