import { AccordionHeaderProps } from './types';
import { getClassNamesAccordionHeader } from '../../utils';
import { useAccordion } from '../../store';

export const AccordionHeader = ({
  children,
  ...props
}: AccordionHeaderProps) => {
  const { color, id, onClick, variant } = useAccordion();
  const classes = getClassNamesAccordionHeader({ color, variant, ...props });

  return (
    <div
      className={classes}
      id={id}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};
