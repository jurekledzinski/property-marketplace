import styles from '../../AdvertsTable.module.css';
import { createColumnHelper } from '@tanstack/react-table';
import { formatDateLocalString } from '@/helpers';
import { getStage, IconButton, UseAdvertsColumnsProps } from '@/components';
import { useMemo } from 'react';
import { UserAdvertsTable } from '@/lib';
import {
  faPenToSquare,
  faTrash,
  faArrowUpRightDots,
} from '@fortawesome/free-solid-svg-icons';

export const useAdvertsColumns = ({
  onActive,
  onDelete,
}: UseAdvertsColumnsProps) => {
  const columnHelper = createColumnHelper<UserAdvertsTable>();

  const columns = useMemo(() => {
    const { accessor } = columnHelper;

    return [
      accessor('title', {
        header: () => <span>Title</span>,
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      accessor('type', {
        header: () => <span>Type</span>,
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      accessor('stage', {
        header: () => <span>Stage</span>,
        cell: (info) => {
          const stage = getStage(info.row.original.updatedAt);

          if (stage && stage === 'active') {
            return <span className={styles.active}>{stage}</span>;
          }

          if (stage && stage === 'inActive') {
            return <span className={styles.inActive}>{stage}</span>;
          }

          if (stage && stage === 'soon expire') {
            return <span className={styles.soonExpire}>{stage}</span>;
          }
        },
      }),
      accessor('createdAt', {
        header: () => <span>Date added</span>,
        cell: (info) => (
          <span>{formatDateLocalString({ date: info.getValue() })}</span>
        ),
        sortingFn: 'datetime',
      }),
      accessor('actions', {
        enableSorting: false,
        header: () => <span>Actions</span>,
        cell: (info) => {
          const stage = getStage(info.row.original.updatedAt);

          return (
            <span style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              <IconButton
                href={`/user/adverts/edit/${info.row.original.id}`}
                icon={[faPenToSquare]}
                size="size-xxs"
                style={{ fontSize: 12 }}
              />
              <IconButton
                icon={[faTrash]}
                onClick={() => onDelete(info.row.original.id)}
                size="size-xxs"
                variant="minimal"
                color="negative"
                style={{ fontSize: 12 }}
              />
              {(stage === 'inActive' || stage === 'soon expire') && (
                <IconButton
                  icon={[faArrowUpRightDots]}
                  onClick={() => onActive(info.row.original.id)}
                  size="size-xxs"
                  variant="minimal"
                  color="success"
                  style={{ fontSize: 12 }}
                />
              )}
            </span>
          );
        },
      }),
    ];
  }, [columnHelper, onActive, onDelete]);

  return columns;
};
