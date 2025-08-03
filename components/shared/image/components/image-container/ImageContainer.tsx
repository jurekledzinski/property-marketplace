'use client';
import { getClassNamesImage } from '../utils';
import { ImageContainerProps } from './types';
import { useState } from 'react';

export const ImageContainer = ({
  children,
  loader,
  ...props
}: ImageContainerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const classNames = getClassNamesImage(isLoading, loader);

  const onLoad = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  return (
    <div {...props} className={classNames}>
      {children ? children({ isError, isLoading, onLoad, onError }) : null}
    </div>
  );
};
