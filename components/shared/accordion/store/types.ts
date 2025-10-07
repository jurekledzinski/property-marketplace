import { AccordionProps } from '../types';

export type ContextAccordion = Omit<AccordionProps, 'children'>;

export type AccordionProviderProps = {
  children: React.ReactNode;
  value: ContextAccordion;
};
