import ImageNext from 'next/image';
import styles from './Image.module.css';
import { classNames } from '@/utils-client';
import { ImageProps } from './types';

export const Image = ({ className, ...props }: ImageProps) => {
  return (
    <ImageNext {...props} className={classNames(className, styles.image)} />
  );
};
