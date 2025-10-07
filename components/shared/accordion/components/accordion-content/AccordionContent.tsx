'use client';
import { AccordionContentProps } from './types';
import { getClassNamesContent } from '../../utils';
import { useAccordion } from '../../store';
import { useRef } from 'react';

export const AccordionContent = ({
  children,
  ...props
}: AccordionContentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const classes = getClassNamesContent(props);

  const { open } = useAccordion();

  const maxHeight = open ? `${ref.current?.scrollHeight}px` : '0px';

  return (
    <div className={classes.content} ref={ref} style={{ maxHeight }}>
      <div className={classes.inner}>{children}</div>
    </div>
  );
};
