import { ContainerProps } from './types';
import { getClassesContainer } from './utils/classNames';
import { JSX } from 'react';

export const Container = ({
  as = 'div',
  className,
  children,
  margin,
  padding,
  maxWidth = 'max-md',
}: ContainerProps) => {
  const Tag = `${as}` as keyof JSX.IntrinsicElements;
  const classes = getClassesContainer({ className, margin, maxWidth, padding });

  return (
    <Tag
      className={classes}
      style={{
        ...(typeof maxWidth === 'number' ? { maxWidth } : {}),
        ...(typeof padding === 'number' ? { padding } : {}),
        ...(typeof margin === 'number' ? { margin } : {}),
      }}
    >
      {children}
    </Tag>
  );
};
