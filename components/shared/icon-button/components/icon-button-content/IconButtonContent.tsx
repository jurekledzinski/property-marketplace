import styles from '../../IconButton.module.css';
import { Icon, Loader } from '@/components';
import { IconButtonContentProps } from './types';

export const IconButtonContent = ({
  icon,
  isLoading,
  size,
}: IconButtonContentProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <span className={styles.iconCenter}>
            <Loader size={size} />
          </span>
          <Icon icon={icon[0]} size="1x" />
        </>
      ) : (
        <>{icon ? <Icon icon={icon[0]} size="1x" /> : null}</>
      )}
    </>
  );
};
