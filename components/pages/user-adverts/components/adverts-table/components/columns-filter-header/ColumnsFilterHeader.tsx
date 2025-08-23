import styles from './ColumnsFilterHeader.module.css';
import { ColumnsFilterHeaderProps } from './types';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Header } from '@tanstack/react-table';
import { HeaderLabel, SortArrows } from './components';
import { MouseEvent, useCallback } from 'react';

export const ColumnsFilterHeader = <T extends object>({
  headerGroup,
}: ColumnsFilterHeaderProps<T>) => {
  const onSort = useCallback(
    (e: MouseEvent<HTMLDivElement>, header: Header<T, unknown>) => {
      const toggleSorting = header.column.getToggleSortingHandler();
      if (toggleSorting) toggleSorting(e);
    },
    []
  );

  if (!headerGroup) return null;

  return (
    <>
      {headerGroup.headers.map((header) => (
        <th key={header.id} colSpan={header.colSpan}>
          {!header.isPlaceholder && (
            <>
              <div
                className={styles.wrapper}
                onClick={(e) => onSort(e, header)}
              >
                <HeaderLabel header={header} />
                <SortArrows header={header} icons={[faArrowUp, faArrowDown]} />
              </div>
            </>
          )}
        </th>
      ))}
    </>
  );
};
