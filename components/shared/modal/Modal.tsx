'use client';
import { Backdrop } from '@/components';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { modalClassNames } from './utils';
import { ModalLayout } from './components';
import { ModalProps } from './types';
import { useCheckMount } from '@/hooks';
import { useModalEffectStatus } from './hooks';
import { useRef, useState } from 'react';

export const Modal = ({
  children,
  open = false,
  isPending = false,
  isSuccess,
  onFailed,
  onSuccess,
  portal,
  ...props
}: ModalProps) => {
  const nodeRef = useRef(null);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const mounted = useCheckMount();

  useModalEffectStatus({
    open,
    isPending,
    isSuccess,
    onFailed,
    onSuccess,
  });

  const classes = modalClassNames();

  const modalElement = (
    <CSSTransition
      in={open}
      nodeRef={nodeRef}
      timeout={300}
      classNames={classes.modal}
      unmountOnExit
      onEnter={() => setShowBackdrop(true)}
      onExited={() => setShowBackdrop(false)}
    >
      <ModalLayout
        className={classes.modalElement}
        isPending={isPending}
        ref={nodeRef}
        {...props}
      >
        {children}
      </ModalLayout>
    </CSSTransition>
  );

  if (!mounted) return null;

  if (portal) {
    return (
      <>
        <Backdrop open={showBackdrop} portal={portal} zIndex={200} />
        {createPortal(modalElement, document.body)}
      </>
    );
  }

  return (
    <>
      <Backdrop open={showBackdrop} portal={portal} zIndex={200} />
      {modalElement}
    </>
  );
};
