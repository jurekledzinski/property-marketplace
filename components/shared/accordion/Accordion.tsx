import AccordionProvider from './store';
import { AccordionProps } from './types';

export const Accordion = ({ children, ...props }: AccordionProps) => {
  return (
    <AccordionProvider value={props}>
      <div>{children}</div>
    </AccordionProvider>
  );
};
