import { selectOptionClassNames } from '../../utils';
import { SelectOptionProps } from './types';
import { useAriaAttributes } from '@/hooks';
import { useSelect } from '../../store';

export const SelectOption = ({
  children,
  id,
  value: selectValue,
}: SelectOptionProps) => {
  const { onChange, size, value } = useSelect();
  const a11y = useAriaAttributes().selectOptionA11y(id, value === id);

  const classes = selectOptionClassNames(id, value, size);

  return (
    <li
      data-id={id}
      data-type="item"
      className={classes.selectOption}
      onClick={() => onChange && onChange(id, selectValue)}
      tabIndex={0}
      {...a11y}
    >
      {children}
    </li>
  );
};
