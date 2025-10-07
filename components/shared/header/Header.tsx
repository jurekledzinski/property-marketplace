'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { AppBar, Button, ButtonGroup, Container, Heading } from '@/components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { HeaderMenu, NavigationButtons } from './components';
import { HeaderProps } from './types';
import { memo } from 'react';
import { showSuccessToast } from '@/utils-client';
import { signOut } from 'next-auth/react';
import { useDrawer, useTheme } from '@/store';
import { usePathname } from 'next/navigation';

export const Header = memo(({ session }: HeaderProps) => {
  const pathname = usePathname();
  const { mode, onChange } = useTheme();
  const { onToggleFiltersPanel, onToggleMenuPanel } = useDrawer();

  const segments = pathname.split('/').filter(Boolean);
  const isDetails = segments[0] === 'adverts' && segments.length === 3;

  return (
    <>
      <AppBar className={styles.bar}>
        <Container m="m-center">
          <nav className={styles.nav}>
            <Heading className={styles.logo} level={4}>
              <Link
                data-link="logo-link"
                href="/"
                prefetch={true}
                scroll={false}
                as="/"
              >
                PlaceQuest
              </Link>
            </Heading>
            <ButtonGroup spacing="normal">
              {isDetails && (
                <Button
                  href="/"
                  iconStart={[faArrowLeft]}
                  label="Back"
                  variant="minimal"
                  size="size-xs"
                />
              )}
              <span className={styles.username}>{session?.name}</span>
              <NavigationButtons
                mode={mode}
                onChangeTheme={onChange}
                onToggleFilters={onToggleFiltersPanel}
                onToggleMenu={onToggleMenuPanel}
                pathname={pathname}
              />
              <HeaderMenu
                onLogout={async () => {
                  showSuccessToast('Logout successful');
                  await signOut({ redirect: true, redirectTo: '/' });
                }}
                session={session}
              />
            </ButtonGroup>
          </nav>
        </Container>
      </AppBar>
    </>
  );
});

Header.displayName = 'Header';
