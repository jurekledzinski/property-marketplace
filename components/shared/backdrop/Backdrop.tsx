'use client';
import styles from './Backdrop.module.css';
import { backdropCSSVariables } from './utils';
import { BackdropProps } from './types';
import { classNames } from '@/helpers';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export const Backdrop = ({
  onClick,
  open,
  zIndex,
  ...props
}: BackdropProps) => {
  const nodeRef = useRef(null);
  const inlineVariables = backdropCSSVariables({ zIndex });

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
          style={inlineVariables}
        />
      </CSSTransition>
    </>
  );
};
