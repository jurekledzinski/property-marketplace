import { forwardRef } from 'react';
import { ModalBody } from '../modal-body';
import { ModalFooter } from '../modal-footer';
import { ModalHeader } from '../modal-header';
import { ModalLayoutProps } from './types';

export const ModalLayout = forwardRef<HTMLDivElement, ModalLayoutProps>(
  (
    {
      children,
      className,
      cancelText = 'Cancel',
      confirmText = 'Confirm',
      color = 'primary',
      onClose,
      title = 'Modal title',
      type = 'button',
      ...footerProps
    },
    ref
  ) => {
    return (
      <div className={className} ref={ref}>
        <ModalHeader title={title} onClose={onClose} color={color} />
        <ModalBody>{children}</ModalBody>
        <ModalFooter
          {...footerProps}
          cancelText={cancelText}
          confirmText={confirmText}
          color={color!}
          type={type}
        />
      </div>
    );
  }
);

ModalLayout.displayName = 'ModalLayout';
