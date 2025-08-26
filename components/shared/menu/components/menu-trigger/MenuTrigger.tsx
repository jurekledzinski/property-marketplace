import { MenuTriggerProps } from './types';
import { useMenuTriggerController } from '../../hooks';

export const MenuTrigger = ({
  children,
  id,
  fullWidth,
  ...props
}: MenuTriggerProps) => {
  const menuTriggerProps = useMenuTriggerController({ fullWidth, id });

  return (
    <button {...props} {...menuTriggerProps} data-id={id} data-type="trigger">
      {children}
    </button>
  );
};
