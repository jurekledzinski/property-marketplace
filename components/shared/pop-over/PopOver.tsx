'use client';
import styles from './PopOver.module.css';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { PopOverProps } from './types';

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export const PopOver = forwardRef<HTMLDivElement, PopOverProps>(
  ({ children, open, ...props }, ref) => {
    const {
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      ...rest
    } = props;

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const nodeRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => nodeRef.current as HTMLDivElement);

    if (!mounted) return null;

    return createPortal(
      <CSSTransition
        in={open}
        nodeRef={nodeRef}
        timeout={300}
        classNames={styles}
        unmountOnExit
        onEnter={onEnter}
        onEntered={onEntered}
        onEntering={onEntering}
        onExit={onExit}
        onExited={onExited}
        onExiting={onExiting}
      >
        <div {...rest} className={styles.popOver} ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>,
      document.body
    );
  }
);

PopOver.displayName = 'PopOver';
