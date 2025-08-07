import ImageNext from 'next/image';
import styles from './Image.module.css';
import { ImageProps } from './types';
import { classNames } from '@/helpers';

export const Image = ({ className, ...props }: ImageProps) => {
  return (
    <ImageNext {...props} className={classNames(className, styles.image)} />
  );
};
