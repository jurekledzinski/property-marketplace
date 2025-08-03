import { getClassesHeading } from './utils';
import { HeadingProps } from './types';
import { JSX } from 'react';

export const Heading = ({ children, level = 1, ...props }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classNames = getClassesHeading({ level, ...props });

  return <Tag className={classNames}>{children}</Tag>;
};
