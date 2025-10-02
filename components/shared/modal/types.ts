import { ModalFooterProps, ModalHeaderProps } from './components';

export type Variant = 'outlined';

export type UseControlModalProps = Partial<{
  open: boolean;
  isPending: boolean;
  isSuccess: boolean;
  onFailed: () => void;
  onSuccess: () => void;
}>;

export interface ModalProps
  extends ModalHeaderProps,
    ModalFooterProps,
    UseControlModalProps {
  children: React.ReactNode;
  portal?: boolean;
  variant?: Variant;
}
