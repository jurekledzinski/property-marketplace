import { Placement } from '../../types';
import { CheckHorizontalSpace, CheckVerticalSpace } from './types';

export const checkHorizontalSpace: CheckHorizontalSpace = ({
  canPlaceRight,
  canPlaceLeft,
  mainDirection,
  currentPlacement,
  mainDefault,
  alignment,
}) => {
  const left = (alignment ? `left ${alignment}` : 'left') as Placement;
  const right = (alignment ? `right ${alignment}` : 'right') as Placement;

  if (!canPlaceRight && canPlaceLeft && mainDirection === 'right') {
    return left;
  }

  if (!canPlaceLeft && canPlaceRight && mainDirection === 'left') {
    return right;
  }

  if (
    currentPlacement !== mainDefault &&
    mainDefault === 'right' &&
    canPlaceRight
  ) {
    return right;
  }

  if (
    currentPlacement !== mainDefault &&
    mainDefault === 'left' &&
    canPlaceLeft
  ) {
    return left;
  }
};

export const checkVerticalSpace: CheckVerticalSpace = ({
  canPlaceTop,
  canPlaceBottom,
  mainDirection,
  currentPlacement,
  mainDefault,
  alignment,
}) => {
  const top = (alignment ? `top ${alignment}` : 'top') as Placement;
  const bottom = (alignment ? `bottom ${alignment}` : 'bottom') as Placement;

  if (!canPlaceTop && canPlaceBottom && mainDirection === 'top') {
    return bottom;
  }

  if (!canPlaceBottom && canPlaceTop && mainDirection === 'bottom') {
    return top;
  }

  if (
    currentPlacement !== mainDefault &&
    mainDefault === 'top' &&
    canPlaceTop
  ) {
    return top;
  }

  if (
    currentPlacement !== mainDefault &&
    mainDefault === 'bottom' &&
    canPlaceBottom
  ) {
    return bottom;
  }
};

export const getCheckSpace = ({
  triggerPosition,
  panelWidth,
  panelHeight,
  gap,
  width,
  height,
}: {
  triggerPosition: DOMRect;
  panelWidth: number;
  panelHeight: number;
  gap: number;
  width: number;
  height: number;
}) => {
  const panelRightEdgeIfOnRight = triggerPosition.right + panelWidth + 2 * gap;
  const panelLeftEdgeIfOnLeft = triggerPosition.left - panelWidth - 2 * gap;

  const canPlaceRight = panelRightEdgeIfOnRight <= width;
  const canPlaceLeft = panelLeftEdgeIfOnLeft >= 0;

  const panelBottomEdge = triggerPosition.bottom + gap;
  const panelTopEdge = triggerPosition.y - gap;

  const canPlaceTop = panelTopEdge > panelHeight;
  const canPlaceBottom = height - panelBottomEdge > panelHeight;

  return { canPlaceRight, canPlaceLeft, canPlaceTop, canPlaceBottom };
};
