import styles from './Image.module.css';
import { ImageProps } from './types';
import ImageNext from 'next/image';

export const Image = ({ ...props }: ImageProps) => {
  return <ImageNext {...props} className={styles.image} />;
};
