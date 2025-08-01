'use client';
import styles from './Backdrop.module.css';
import { BackdropProps } from './types';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export const Backdrop = ({ onClick, open }: BackdropProps) => {
  const nodeRef = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={open}
        timeout={300}
        classNames={styles}
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className={styles.backdropElement}
          onClick={onClick}
        />
      </CSSTransition>
    </>
  );
};
