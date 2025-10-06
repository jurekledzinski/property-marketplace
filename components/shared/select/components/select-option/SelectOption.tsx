import { selectOptionClassNames } from '../../utils';
import { SelectOptionProps } from './types';
import { useAriaAttributes } from '@/hooks';
import { usePopOver } from '@/components';
import { useSelect } from '../../store';

export const SelectOption = ({ children, value }: SelectOptionProps) => {
  const { onChange, size, value: currentValue } = useSelect();
  const { onClose } = usePopOver();

  const a11y = useAriaAttributes().selectOptionA11y(
    value.key,
    currentValue === value.key
  );

  const classes = selectOptionClassNames(value.key, currentValue, size);

  return (
    <li
      data-id={value.key}
      data-type="item"
      className={classes.selectOption}
      onClick={() => {
        if (onChange) onChange(value.key, value.payload);
        onClose('root');
      }}
      tabIndex={0}
      {...a11y}
    >
      {children}
    </li>
  );
};
