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
    y: triggerPosition.y + window.scrollY - panelHeight,
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
  const triggerHeight = triggerPosition.height;

  const bottom = {
    x: triggerPosition.x - panelWidth / 2 + triggerWidth / 2,
    y: triggerPosition.y + triggerHeight + window.scrollY,
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
    y: triggerPosition.y + window.scrollY + triggerHeight / 2 - panelHeight / 2,
    w: autoWidth ? triggerWidth : panelWidth,
  };

  if (alignment === 'start') {
    left.y = triggerPosition.y + window.scrollY;
  }

  if (alignment === 'end') {
    left.y = triggerPosition.bottom + window.scrollY - panelHeight;
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
    y: triggerPosition.y + window.scrollY + triggerHeight / 2 - panelHeight / 2,
    w: autoWidth ? triggerWidth : panelWidth,
  };

  if (alignment === 'start') {
    right.y = triggerPosition.y + window.scrollY;
  }

  if (alignment === 'end') {
    right.y = triggerPosition.bottom + window.scrollY - panelHeight;
  }

  return right;
};
