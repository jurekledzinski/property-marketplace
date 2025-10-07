import { ContainerProps } from './types';
import { getClassesContainer } from './utils/classNames';
import { JSX } from 'react';
import {
  filterProps,
  spacingInlineStyles,
  spacingValues,
} from '@/utils-client';

export const Container = ({
  as = 'div',
  children,
  ...props
}: ContainerProps) => {
  const Tag = `${as}` as keyof JSX.IntrinsicElements;

  const classes = getClassesContainer(props);
  const spacingProps = filterProps(props, spacingValues, true);
  const inline = spacingInlineStyles(spacingProps);

  return (
    <Tag className={classes} style={inline}>
      {children}
    </Tag>
  );
};
