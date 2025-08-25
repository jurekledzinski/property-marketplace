'use client';
import { AccordionContentProps } from './types';
import { classNames } from '@/helpers';
import { getClassNamesContent } from '../../utils';
import { useRef } from 'react';

export const AccordionContent = ({
  active,
  children,
  className,
  ...props
}: AccordionContentProps) => {
  const refContent = useRef<HTMLDivElement | null>(null);
  const classes = getClassNamesContent(props);

  return (
    <div
      className={classNames(classes.content, className!)}
      ref={refContent}
      style={{
        maxHeight: active ? `${refContent.current?.scrollHeight}px` : '0px',
      }}
    >
      <div className={classes.inner}>{children}</div>
    </div>
  );
};
