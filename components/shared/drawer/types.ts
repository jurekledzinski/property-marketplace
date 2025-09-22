export type DrawerProps = {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  open?: boolean;
  width?: number;
  top?: number;
  variant?: 'overlay' | 'push' | 'pinned';
};
