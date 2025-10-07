import styles from '../../Backdrop.module.css';
import { BaseBackdropProps } from './types';
import { classNames } from '@/utils-client';
import { CSSTransition } from 'react-transition-group';

export const BaseBackdrop = ({
  open,
  ref,
  timeout = 300,
  ...props
}: BaseBackdropProps) => {
  return (
    <CSSTransition
      nodeRef={ref}
      in={open}
      timeout={timeout}
      classNames={styles}
      unmountOnExit
    >
      <div
        {...props}
        ref={ref}
        className={classNames(props.className, styles.backdropElement)}
        style={props.style}
      />
    </CSSTransition>
  );
};
