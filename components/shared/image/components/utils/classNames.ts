import styles from '../image-container/ImageContainer.module.css';
import { classNames } from '@/helpers';
import { Loading } from '../image-container';

export const getClassNamesImage = (isLoading: boolean, loader?: Loading) => {
  return classNames(
    styles['image-wrapper'],
    isLoading && loader === 'skeleton' ? 'skeleton' : ''
  );
};
