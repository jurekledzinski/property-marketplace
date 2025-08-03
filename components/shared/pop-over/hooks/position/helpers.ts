import { Alignment, BasePlacement, Placement } from '../../types';
import {
  CheckHorizontalSpace,
  CheckVerticalSpace,
  SetNewPosition,
  SizeWindow,
} from './types';

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

export const getNumericValue = (value: string, unit: string = 'px') => {
  if (value.endsWith(unit)) return parseFloat(value.replace(unit, ''));
  return parseFloat(value);
};

export const setNewPosition: SetNewPosition = ({
  autoWidth,
  panelRef,
  updatedPosition,
  mainDirection,
  gap,
}) => {
  if (panelRef.current) {
    panelRef.current.style.left = `${updatedPosition.x}px`;
    panelRef.current.style.top = `${updatedPosition.y}px`;
    if (mainDirection === 'bottom') {
      panelRef.current.style.transform = `translateY(${gap}px)`;
    }

    if (mainDirection === 'top') {
      panelRef.current.style.transform = `translateY(-${gap}px)`;
    }

    if (mainDirection === 'left') {
      panelRef.current.style.transform = `translateX(-${gap}px)`;
    }

    if (mainDirection === 'right') {
      panelRef.current.style.transform = `translateX(${gap}px)`;
    }

    if (autoWidth) panelRef.current.style.width = `${updatedPosition.w}px`;
  }
};

export const getPanelRect = (
  panelRef: HTMLDivElement,
  widthPanel: React.RefObject<number | undefined>,
  heightPanel: React.RefObject<number | undefined>
) => {
  const panelPosition = panelRef.getBoundingClientRect();
  const panelWidth = widthPanel.current ?? panelRef.offsetWidth;
  const panelHeight = heightPanel.current ?? panelRef.offsetHeight;
  const panelStyle = window.getComputedStyle(panelRef);
  return { panelPosition, panelHeight, panelWidth, panelStyle };
};

export const getPanelDirection = (
  placement: Placement,
  dynamic: Placement | undefined
) => {
  const currentPlacement = dynamic ?? placement;
  const mainDirection = dynamic?.split(' ')[0] ?? placement.split(' ')[0];
  const alignment = dynamic?.split(' ')[1] ?? placement?.split(' ')[1];

  return { currentPlacement, mainDirection, alignment };
};

export const getCheckSpace = ({
  triggerPosition,
  panelWidth,
  panelHeight,
  gap,
  width,
}: {
  triggerPosition: DOMRect;
  panelWidth: number;
  panelHeight: number;
  gap: number;
  width: number;
}) => {
  const panelRightEdgeIfOnRight = triggerPosition.right + panelWidth + 2 * gap;
  const panelLeftEdgeIfOnLeft = triggerPosition.left - panelWidth - 2 * gap;

  const canPlaceRight = panelRightEdgeIfOnRight <= width;
  const canPlaceLeft = panelLeftEdgeIfOnLeft >= 0;

  const panelBottomEdge = triggerPosition.bottom + panelHeight + 2 * gap;
  const panelTopEdge = triggerPosition.y - panelHeight - 2 * gap;

  const canPlaceTop = panelTopEdge >= 0;
  const canPlaceBottom = panelBottomEdge <= width;

  return { canPlaceRight, canPlaceLeft, canPlaceTop, canPlaceBottom };
};

export const updateSizeWindow = (
  el: SizeWindow | undefined,
  sizeWindow: React.RefObject<{ width: number; height: number }>
) => {
  if (!sizeWindow.current) return sizeWindow.current ?? { width: 0, height: 0 };

  if (el) {
    sizeWindow.current.height = el.h;
    sizeWindow.current.width = el.w;
  } else {
    sizeWindow.current.width = window.innerWidth;
    sizeWindow.current.height = window.innerHeight;
  }

  return sizeWindow.current;
};

export const arrowFlip = (value: Placement) => {
  const [key, align] = value.split(' ') as [BasePlacement, Alignment?];

  const flippedValue: Placement = (() => {
    switch (key) {
      case 'bottom':
        return align ? `top ${align}` : 'top';
      case 'top':
        return align ? `bottom ${align}` : 'bottom';
      case 'left':
        return align ? `right ${align}` : 'right';
      case 'right':
        return align ? `left ${align}` : 'left';
      default:
        return value as Placement;
    }
  })();

  return flippedValue;
};
