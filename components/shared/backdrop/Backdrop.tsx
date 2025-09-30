'use client';
import { backdropCSSVariables } from './utils';
import { BackdropProps } from './types';
import { BaseBackdrop } from './components';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';

export const Backdrop = ({
  open,
  portal,
  timeout = 300,
  zIndex,
  ...props
}: BackdropProps) => {
  const nodeRef = useRef(null);
  const inlineVariables = backdropCSSVariables({ zIndex });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (portal) {
    return createPortal(
      <BaseBackdrop
        open={open}
        ref={nodeRef}
        style={inlineVariables}
        timeout={timeout}
        {...props}
      />,
      document.body
    );
  }

  return (
    <BaseBackdrop
      open={open}
      ref={nodeRef}
      style={inlineVariables}
      timeout={timeout}
      {...props}
    />
  );
};
