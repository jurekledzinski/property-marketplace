import { ModalFooterProps, ModalHeaderProps } from './components';

export type UseControlModalProps = Partial<{
  isOpen: boolean;
  isPending: boolean;
  isSuccess: boolean;
  onSuccess: () => void;
}>;

export interface ModalProps
  extends ModalHeaderProps,
    ModalFooterProps,
    UseControlModalProps {
  children: React.ReactNode;
}
