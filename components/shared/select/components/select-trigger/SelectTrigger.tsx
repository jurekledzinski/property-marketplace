import { capitalizeFirstLetter } from '@/helpers';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { getClassNamesInput, InputWrapper, usePopOver } from '@/components';
import { SelectTriggerProps } from './types';
import { useAriaAttributes } from '@/hooks';
import { useCallback } from 'react';
import { useSelect } from '../../store';
import { useTriggerEvents } from './hooks/trigger-events';

export const SelectTrigger = ({
  children,
  endIcon = [faChevronUp, faChevronDown],
  ...props
}: SelectTriggerProps) => {
  const { onToggle, open, setTrigger } = usePopOver();
  const { isError, label, size, value, variant } = useSelect();
  const { onClick, onKeyDown } = useTriggerEvents({ onToggle });

  const isOpen = open['root'];
  const a11y = useAriaAttributes().selectTriggerA11y(isOpen, label);
  const classes = getClassNamesInput({ variant, size, isError });

  const setTriggerRef = useCallback(
    (node: HTMLDivElement) => node && setTrigger(node, 'root'),
    [setTrigger]
  );

  return (
    <InputWrapper
      disabled={props.disabled}
      dividerEnd={true}
      endIcon={isOpen ? endIcon[0] : endIcon[1]}
      isError={isError}
      onClickEndIcon={onClick}
      ref={setTriggerRef}
      size={size}
      variant={variant}
      {...(isOpen && { className: 'focused' })}
      {...a11y}
    >
      <fieldset className={classes.fieldset} onClick={onClick}>
        <input
          {...props}
          className={classes.input}
          readOnly
          value={capitalizeFirstLetter(value)}
          onKeyDown={onKeyDown}
          tabIndex={-1}
        />
        {variant !== 'basic' && (
          <legend className={classes.legend}>{label}</legend>
        )}
      </fieldset>
      {children}
    </InputWrapper>
  );
};
