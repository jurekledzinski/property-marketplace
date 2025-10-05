import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AccordionActionsProps } from './types';
import { IconButton, useAccordion } from '@/components';

export const AccordionActions = ({ onDelete }: AccordionActionsProps) => {
  const context = useAccordion();

  return (
    <>
      {onDelete && (
        <IconButton
          icon={[faTrash]}
          id={`delete-${context.id}`}
          name="delete"
          color="negative"
          variant="minimal"
          onClick={onDelete}
          type="button"
        />
      )}
    </>
  );
};
