import { ModalProps } from '../../types';

type OmitKeys = 'isSuccess' | 'open' | 'onFailed' | 'onSuccess' | 'portal';

export interface ModalLayoutProps extends Omit<ModalProps, OmitKeys> {
  className?: string;
}
