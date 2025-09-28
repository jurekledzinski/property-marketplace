import { selectOptionClassNames } from '../../utils';
import { SelectOptionProps } from './types';
import { useAriaAttributes } from '@/hooks';
import { usePopOver } from '@/components';
import { useSelect } from '../../store';

export const SelectOption = ({ children, data, id }: SelectOptionProps) => {
  const { onChange, size, value } = useSelect();
  const { onClose } = usePopOver();
  const a11y = useAriaAttributes().selectOptionA11y(id, value === id);
  const classes = selectOptionClassNames(id, value, size);

  return (
    <li
      data-id={id}
      data-type="item"
      className={classes.selectOption}
      onClick={() => {
        if (onChange) onChange(id, data);
        onClose('root');
      }}
      tabIndex={0}
      {...a11y}
    >
      {children}
    </li>
  );
};
