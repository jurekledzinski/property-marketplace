'use client';
import { Backdrop } from '@/components';
import { CSSTransition } from 'react-transition-group';
import { ModalBody, ModalFooter, ModalHeader } from './components';
import { modalClassNames } from './utils';
import { ModalProps } from './types';
import { useCloseModalOnSuccess } from './hooks';
import { useRef, useState } from 'react';

export const Modal = ({
  children,
  confirmText = 'Confirm',
  title = 'Modal title',
  cancelText = 'Cancel',
  isOpen = false,
  isPending = false,
  isSuccess = false,
  onCancel,
  onClose,
  onConfirm,
  onSuccess,
  type = 'button',
  variant = 'primary',
}: ModalProps) => {
  const nodeRef = useRef(null);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useCloseModalOnSuccess({
    isOpen,
    isPending,
    isSuccess,
    onSuccess,
  });

  const classes = modalClassNames();

  return (
    <>
      <Backdrop open={showBackdrop} />
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        classNames={classes.modal}
        unmountOnExit
        onEnter={() => setShowBackdrop(true)}
        onExited={() => setShowBackdrop(false)}
      >
        <div className={classes.modalElement} ref={nodeRef}>
          <ModalHeader title={title} onClose={onClose} variant={variant} />
          <ModalBody>{children}</ModalBody>
          <ModalFooter
            cancelText={cancelText}
            confirmText={confirmText}
            onCancel={onCancel}
            onConfirm={onConfirm}
            type={type}
            variant={variant!}
          />
        </div>
      </CSSTransition>
    </>
  );
};
