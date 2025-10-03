'use client';
import { useState } from 'react';
import { AlertProps } from './types';
import { getClassNamesAlert } from './utils';
import { Icon, IconButton } from '@/components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Alert = ({ icon, isClosable, message, ...props }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const classes = getClassNamesAlert(props);

  return (
    <>
      {isVisible ? (
        <div className={classes.alert}>
          <span className={classes.icon}>
            <Icon icon={icon} />
          </span>

          <p className={classes.message}>{message}</p>

          {isClosable ? (
            <span className={classes.iconClose}>
              <IconButton
                icon={[faXmark]}
                onClick={() => setIsVisible(false)}
                size="size-xxs"
                variant="contained"
                color={props.color}
                contrast
              />
            </span>
          ) : null}
        </div>
      ) : null}
    </>
  );
};
