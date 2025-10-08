import Link from 'next/link';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderMenuProps } from './types';
import { IconButton, Menu, MenuItem, MenuTrigger } from '@/components';

export const HeaderMenu = ({ onLogout, session }: HeaderMenuProps) => {
  return (
    <>
      <MenuTrigger>
        <IconButton icon={[faBars]} variant="minimal" size="size-md" />
        <Menu size="size-xs">
          {!session?.id && (
            <MenuItem id="login" type="link">
              <Link href="/auth/login" prefetch={true}>
                Login
              </Link>
            </MenuItem>
          )}
          {!session?.id && (
            <MenuItem id="register" type="link">
              <Link href="/auth/register" prefetch={true}>
                Register
              </Link>
            </MenuItem>
          )}
          {!!session?.id && (
            <MenuItem id="dashbord" type="link">
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
      </MenuTrigger>
    </>
  );
};
