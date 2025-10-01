'use client';
import { backdropCSSVariables } from './utils';
import { BackdropProps } from './types';
import { BaseBackdrop } from './components';
import { createPortal } from 'react-dom';
import { useCheckMount } from '@/hooks';
import { useRef } from 'react';

export const Backdrop = ({ portal, zIndex, ...props }: BackdropProps) => {
  const nodeRef = useRef(null);
  const inlineVariables = backdropCSSVariables({ zIndex });
  const mounted = useCheckMount();

  if (!mounted) return null;

  if (portal) {
    return createPortal(
      <BaseBackdrop ref={nodeRef} style={inlineVariables} {...props} />,
      document.body
    );
  }

  return <BaseBackdrop ref={nodeRef} style={inlineVariables} {...props} />;
};
