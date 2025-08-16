import { filterProps, spacingInlineStyles, spacingValues } from '@/helpers';
import { getClassNamesHeading } from './utils';
import { HeadingProps } from './types';
import { JSX } from 'react';

export const Heading = ({ children, level = 1, ...props }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classes = getClassNamesHeading({ level, ...props });
  const spacingProps = filterProps(props, spacingValues, true);
  const inline = spacingInlineStyles(spacingProps);

  return (
    <Tag className={classes} style={inline}>
      {children}
    </Tag>
  );
};
