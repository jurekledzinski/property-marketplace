import { BaseMenu } from './BaseMenu';
import { MenuProps } from './types';
import { useMenuController } from '../../hooks';

export const Menu = ({ children, ...props }: MenuProps) => {
  const menuProps = useMenuController();

  return (
    <BaseMenu {...props} {...menuProps}>
      {children}
    </BaseMenu>
  );
};
