import Image from 'next/image';
import styles from '../../Chip.module.css';
import { Icon } from '@/components';
import { StartIconProps } from './types';

export const StartIcon = ({ startIcon, startIconSrc }: StartIconProps) => {
  if (startIcon) {
    return (
      <span className={styles.iconStart}>
        <Icon icon={startIcon} />
      </span>
    );
  }

  if (startIconSrc) {
    return (
      <Image className={styles.image} src={startIconSrc} alt="Chip image" />
    );
  }

  return null;
};
