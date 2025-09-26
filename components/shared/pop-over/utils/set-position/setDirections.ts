import { getNumericValue } from '@/components';
import { SetBottom, SetLeft, SetRight, SetTop } from './types';

export const setTop: SetTop = ({
  alignment,
  autoWidth,
  triggerPosition,
  panelWidth,
  panelHeight,
}) => {
  const triggerWidth = triggerPosition.width;

  const top = {
    x: triggerPosition.x - panelWidth / 2 + triggerWidth / 2,
    y: triggerPosition.top - panelHeight,
    w: autoWidth ? triggerWidth : panelWidth,
  };

  if (alignment === 'start') {
    top.x = triggerPosition.x;
  }

  if (alignment === 'end') {
    top.x = triggerPosition.x - panelWidth + triggerWidth;
  }

  return top;
};

export const setBottom: SetBottom = ({
  alignment,
  autoWidth,
  triggerPosition,
  panelWidth,
}) => {
  const triggerWidth = triggerPosition.width;

  const y1 = triggerPosition.bottom;
  const y2 = triggerPosition.height + triggerPosition.y;

  const bottom = {
    x: triggerPosition.x - panelWidth / 2 + triggerWidth / 2,
    y: triggerPosition.bottom,
    w: autoWidth ? triggerWidth : panelWidth,
  };

  if (alignment === 'start') {
    bottom.x = triggerPosition.x;
  }

  if (alignment === 'end') {
    bottom.x = triggerPosition.x - panelWidth + triggerWidth;
  }

  return bottom;
};

export const setLeft: SetLeft = ({
  alignment,
  autoWidth,
  triggerPosition,
  panelWidth,
  panelHeight,
  panelStyle,
}) => {
  const triggerHeight = triggerPosition.height;
  const triggerWidth = triggerPosition.width;
  const paddingLeft = getNumericValue(panelStyle.paddingLeft);

  const left = {
    x: triggerPosition.x - panelWidth - paddingLeft,
    y: triggerPosition.top + triggerHeight / 2 - panelHeight / 2,
    w: autoWidth ? triggerWidth : panelWidth,
  };

  if (alignment === 'start') {
    left.y = triggerPosition.top;
  }

  if (alignment === 'end') {
    left.y = triggerPosition.bottom - panelHeight;
  }

  return left;
};

export const setRight: SetRight = ({
  alignment,
  autoWidth,
  triggerPosition,
  panelWidth,
  panelHeight,
  panelStyle,
}) => {
  const triggerHeight = triggerPosition.height;
  const triggerWidth = triggerPosition.width;
  const paddingRight = getNumericValue(panelStyle.paddingRight);

  const right = {
    x: triggerPosition.x + triggerWidth + paddingRight,
    y: triggerPosition.top + triggerHeight / 2 - panelHeight / 2,
    w: autoWidth ? triggerWidth : panelWidth,
  };

  if (alignment === 'start') {
    right.y = triggerPosition.top;
  }

  if (alignment === 'end') {
    right.y = triggerPosition.bottom - panelHeight;
  }

  return right;
};
