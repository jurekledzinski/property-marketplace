import styles from './AdvertsTable.module.css';
import { AdvertsTableTableProps } from './types';
import { ColumnsFilterBody, ColumnsFilterHeader } from './components';
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons';
import { UserAdvertsTable } from '@/services';
import {
  TableState,
  Table,
  TableBody,
  TableHeader,
  TableStatus,
  NoResults,
} from '@/components';

export const AdvertsTable = ({
  children,
  isEmpty,
  loading,
  noResults,
  table,
  emptyMessage = 'No data available',
  noResultsMessage = 'No results match your filter',
}: AdvertsTableTableProps<UserAdvertsTable>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTable}>
        <div className={styles.wrapperContent}>
          <Table>
            <TableHeader table={table}>
              <ColumnsFilterHeader />
            </TableHeader>

            <TableBody table={table}>
              <ColumnsFilterBody />
              <TableStatus isEmpty={isEmpty} isLoading={loading} />
            </TableBody>
          </Table>

          {!isEmpty && (
            <TableState>
              <NoResults icon={faRectangleAd} level={5} text={emptyMessage} />
            </TableState>
          )}
          {!noResults && isEmpty && (
            <TableState>
              <NoResults
                icon={faRectangleAd}
                level={5}
                text={noResultsMessage}
              />
            </TableState>
          )}
        </div>
      </div>
      <div className={styles.wrapperPagination}>
        {children && typeof children === 'function' ? children(table) : null}
      </div>
    </div>
  );
};
