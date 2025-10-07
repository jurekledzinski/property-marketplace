import styles from './SortArrows.module.css';
import { Icon } from '@/components';
import { SortArrowsProps } from './types';

export const SortArrows = <T extends object>({
  icons,
  header,
}: SortArrowsProps<T>) => {
  return (
    <span className={styles.wrapper}>
      {{
        asc: <Icon icon={icons[0]} />,
        desc: <Icon icon={icons[1]} />,
      }[header.column.getIsSorted() as string] ?? null}
    </span>
  );
};
