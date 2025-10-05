import { AccordionSelectProps } from './types';
import { Checkbox, useAccordion } from '@/components';

export const AccordionSelect = ({ onSelect, size }: AccordionSelectProps) => {
  const context = useAccordion();

  return (
    <Checkbox
      id={`select-${context.id}`}
      name="delete"
      color="negative"
      size={size}
      variant="unfilled"
      onChange={onSelect}
    />
  );
};
