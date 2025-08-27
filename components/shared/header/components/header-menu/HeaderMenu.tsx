import Link from 'next/link';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderMenuProps } from './types';
import {
  Icon,
  Menu,
  MenuContainer,
  MenuItem,
  MenuPanel,
  MenuTrigger,
} from '@/components';

export const HeaderMenu = ({ onLogout, session }: HeaderMenuProps) => {
  return (
    <MenuContainer>
      <MenuTrigger id="root">
        <Icon icon={faBars} />
      </MenuTrigger>
      <MenuPanel
        id="root"
        placement="bottom end"
        type="floating"
        arrowPlacement="top end"
        arrowColor="default"
        arrowSize="size-xs"
      >
        <Menu>
          {!session?.id && (
            <MenuItem id="login">
              <Link href="/auth/login" prefetch={true}>
                Login
              </Link>
            </MenuItem>
          )}
          {!session?.id && (
            <MenuItem id="register">
              <Link href="/auth/register" prefetch={true}>
                Register
              </Link>
            </MenuItem>
          )}
          {!!session?.id && (
            <MenuItem id="dashbord">
              <Link href="/user/dashboard" prefetch={true}>
                Dashboard
              </Link>
            </MenuItem>
          )}
          {!!session?.id && (
            <MenuItem id="logout" onClick={onLogout}>
              Logout
            </MenuItem>
          )}
        </Menu>
      </MenuPanel>
    </MenuContainer>
  );
};
