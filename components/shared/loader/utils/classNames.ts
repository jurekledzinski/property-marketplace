import styles from '../Loader.module.css';
import { classNames } from '@/utils-client';
import { LoaderProps } from '../types';

interface Params extends Pick<LoaderProps, 'border' | 'position' | 'size'> {
  className?: string;
}

export const loaderClassNames = (params: Params) => {
  const { border, className, position, size } = params;
  return classNames(
    styles.loader,
    styles[size ?? ''],
    styles[position ?? ''],
    styles[border ?? ''],
    className ?? ''
  );
};
