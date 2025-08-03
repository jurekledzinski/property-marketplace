import { Icon, InputVariant, Size } from '@/types';

export interface InputWrapperProps {
  as?: 'input' | 'textarea';
  divider?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  endIcon?: Icon | string;
  isError?: boolean;
  isPending?: boolean;
  statusVisible?: boolean;
  onClickEndIcon?: React.MouseEventHandler<HTMLButtonElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLButtonElement>;
  size?: Size;
  startIcon?: Icon;
  readOnly?: boolean;
  variant?: InputVariant;
}
