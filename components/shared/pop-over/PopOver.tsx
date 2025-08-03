import styles from './PopOver.module.css';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { PopOverProps } from './types';

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

    const nodeRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => nodeRef.current as HTMLDivElement);

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
