'use client';
import { getClassNamesImage } from '../utils';
import { ImageContainerProps } from './types';
import { useState } from 'react';
import { classNames } from '@/helpers';

export const ImageContainer = ({
  children,
  className,
  loader,
  ...props
}: ImageContainerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const classes = getClassNamesImage(isLoading, loader);

  const onLoad = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  return (
    <div {...props} className={classNames(className, classes)}>
      {children ? children({ isError, isLoading, onLoad, onError }) : null}
    </div>
  );
};
