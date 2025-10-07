import { Alignment, BasePlacement, Placement } from '../../types';

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
