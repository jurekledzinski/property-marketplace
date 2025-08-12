'use client';
import styles from './Backdrop.module.css';
import { BackdropProps } from './types';
import { classNames } from '@/helpers';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export const Backdrop = ({ onClick, open, ...props }: BackdropProps) => {
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
          {...props}
          ref={nodeRef}
          className={classNames(props.className, styles.backdropElement)}
          onClick={onClick}
        />
      </CSSTransition>
    </>
  );
};
