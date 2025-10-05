import { AccordionContentProps, AccordionHeaderProps } from '../components';
import { AccordionProps } from '../types';

type CleanHeaderProps = Omit<AccordionHeaderProps, 'children' | 'onClick'>;

type ParamsHeader = Omit<AccordionProps, 'children' | 'id' | 'open'> &
  CleanHeaderProps;

type ParamsContent = Omit<AccordionContentProps, 'children'>;

export type ClassesAccordionHeader = (params: ParamsHeader) => string;

export type ClassesAccordionContent = (params: ParamsContent) => {
  content: string;
  inner: string;
};
