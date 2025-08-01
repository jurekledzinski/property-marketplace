export type DrawerProps = {
  children: React.ReactNode;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  open?: boolean;
  variant?: 'overlay' | 'push' | 'pinned';
};
