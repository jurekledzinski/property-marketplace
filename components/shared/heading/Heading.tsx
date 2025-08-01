import { getClassesHeading } from './utils';
import { HeadingProps } from './types';
import { JSX } from 'react';

export const Heading = ({
  className,
  fw,
  level = 1,
  children,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classNames = getClassesHeading({ className, fw, level });

  return <Tag className={classNames}>{children}</Tag>;
};
