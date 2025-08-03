import { ArrowProps } from './types';
import { getClassNamesArrow } from './utils';

export const Arrow = ({
  color = 'default',
  gap = 1,
  placement = 'top',
  size = 'size-xs',
}: ArrowProps) => {
  const classNames = getClassNamesArrow({ color, placement, size });

  return (
    <span
      className={classNames}
      style={{ '--arrow-gap': gap } as React.CSSProperties}
    ></span>
  );
};
