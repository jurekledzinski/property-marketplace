import styles from './AdvertsTable.module.css';
import { AdvertsTableTableProps } from './types';
import { ColumnsFilterBody, ColumnsFilterHeader } from './components';
import {
  TableState,
  Table,
  TableBody,
  TableHeader,
  TableStatus,
} from '@/components';
import { UserAdvertsTable } from '@/lib';

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

          {!isEmpty && <TableState>{emptyMessage}</TableState>}
          {!noResults && isEmpty && <TableState>{noResultsMessage}</TableState>}
        </div>
      </div>
      <div className={styles.wrapperPagination}>
        {children && typeof children === 'function' ? children(table) : null}
      </div>
    </div>
  );
};
