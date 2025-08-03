import styles from '../Message.module.css';
import { classNames } from '@/helpers';
import { MessageProps } from '../types';

type Variant = MessageProps['variant'];

export const messageClassNames = (variant: Variant = 'error') => ({
  message: classNames(styles.message, styles[variant]),
});
