'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { AppBar, ButtonGroup, Container, Heading } from '@/components';
import { HeaderMenu, NavigationButtons } from './components';
import { HeaderProps } from './types';
import { memo } from 'react';
import { showSuccessToast } from '@/helpers';
import { signOut } from 'next-auth/react';
import { useDrawer, useTheme } from '@/store';

export const Header = memo(({ session }: HeaderProps) => {
  const { mode, onChange } = useTheme();
  const { onToggleFiltersPanel, onToggleMenuPanel } = useDrawer();

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
              <span className={styles.username}>{session?.name}</span>
              <NavigationButtons
                mode={mode}
                onChangeTheme={onChange}
                onToggleFilters={onToggleFiltersPanel}
                onToggleMenu={onToggleMenuPanel}
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
