import { useContext } from 'react';
import { AccordionContext } from './contextAccordion';

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('Accordion context not found!');
  return context;
};
