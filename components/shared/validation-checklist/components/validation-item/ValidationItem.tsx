import styles from './ValidationItem.module.css';
import { classNames } from '@/helpers';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@/components';
import { ValidationItemProps } from './types';

export const ValidationItem = ({
  children,
  className,
  icons = [faCheck, faXmark],
  isValid,
  ...props
}: ValidationItemProps) => {
  return (
    <li {...props} className={classNames(styles.item, className)}>
      {isValid ? (
        <Icon className={styles.space} icon={icons[0]} color="success" />
      ) : (
        <Icon className={styles.space} icon={icons[1]} color="negative" />
      )}
      {children}
    </li>
  );
};
