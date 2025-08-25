import { AccordionHeaderProps } from './types';
import { Checkbox } from '@/components';
import { getClassNamesAccordionHeader } from '../../utils';
import { useAccordion } from '../../store';

export const AccordionHeader = ({
  checked,
  id,
  title,
  onChange,
  onChangeDelete,
  onClick,
  p,
  size,
}: AccordionHeaderProps) => {
  const context = useAccordion();
  const classes = getClassNamesAccordionHeader({ ...context, p });

  return (
    <header className={classes.header}>
      <Checkbox
        className={classes.checkbox}
        defaultChecked={checked}
        color={context.color}
        size={size}
        id={id}
        name={'option'}
        onChange={onChange}
        onClick={onClick}
        type="checkbox"
        value={id}
      >
        {title}
      </Checkbox>

      {onChangeDelete ? (
        <Checkbox
          id={`delete-${id}`}
          name="delete"
          color="negative"
          variant="filled"
          onChange={onChangeDelete}
        />
      ) : null}
    </header>
  );
};
