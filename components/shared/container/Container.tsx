import { ContainerProps } from './types';
import { getInlineContainerStyles } from './utils';
import { getClassesContainer } from './utils/classNames';
import { JSX } from 'react';

export const Container = ({
  as = 'div',
  children,
  ...props
}: ContainerProps) => {
  const Tag = `${as}` as keyof JSX.IntrinsicElements;
  const classes = getClassesContainer(props);
  const inline = getInlineContainerStyles(props);

  return (
    <Tag className={classes} style={inline}>
      {children}
    </Tag>
  );
};
