import styles from '../Message.module.css';
import { classNames } from '@/utils-client';
import { MessageProps } from '../types';

type Variant = MessageProps['variant'];

export const messageClassNames = (variant: Variant = 'error') => ({
  message: classNames(styles.message, styles[variant]),
});
