import { getMenuItemClassNames } from '../../utils';
import { MenuItemProps } from './types';

export const MenuItem = ({
  children,
  className,
  type,
  ...props
}: MenuItemProps) => {
  const classes = getMenuItemClassNames({ className, type });

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  );
};
