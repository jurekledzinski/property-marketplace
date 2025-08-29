import styles from '../../AdvertsTable.module.css';
import { AdvertsUser } from '../../types';
import { createColumnHelper } from '@tanstack/react-table';
import { IconButton, UseAdvertsColumnsProps } from '@/components';
import { useMemo } from 'react';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const useAdvertsColumns = ({ onDelete }: UseAdvertsColumnsProps) => {
  const columnHelper = createColumnHelper<AdvertsUser>();

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
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      accessor('createdAt', {
        header: () => <span>Date added</span>,
        cell: (info) => (
          <span>
            {new Date(info.getValue()).toLocaleString('en-GB', {
              timeZone: 'UTC',
            })}
          </span>
        ),
        sortingFn: 'datetime',
      }),
      accessor('actions', {
        enableSorting: false,
        header: () => <span>Actions</span>,
        cell: (info) => (
          <span style={{ display: 'flex', gap: 8 }}>
            <IconButton
              href={`/user/adverts/edit/${info.row.original.id}`}
              icon={[faPenToSquare]}
            />
            <IconButton
              icon={[faTrash]}
              onClick={() => onDelete(info.row.original.id)}
              type="button"
            />
          </span>
        ),
      }),
    ];
  }, [columnHelper, onDelete]);

  return columns;
};
