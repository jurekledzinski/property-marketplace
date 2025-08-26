import styles from './MenuItem.module.css';
import { MenuItemProps } from './types';
import { useAriaAttributes } from '@/hooks';

export const MenuItem = ({ children, id, ...props }: MenuItemProps) => {
  const a11y = useAriaAttributes().menuItemA11y();

  return (
    <div
      className={styles['menu-item']}
      data-id={id}
      data-type="item"
      {...a11y}
      {...props}
    >
      {children}
    </div>
  );
};
