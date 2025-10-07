import { AccordionContext } from './contextAccordion';
import { AccordionProviderProps } from './types';

const AccordionProvider = ({ children, value }: AccordionProviderProps) => {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionProvider;
