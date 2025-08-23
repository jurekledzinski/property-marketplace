import { AdvertsUser } from '../../types';
import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';

export const useAdvertsColumns = () => {
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
            <button
              onClick={() => {
                console.log('edit info', info);
              }}
              style={{ flex: 1 }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                console.log('delete info', info);
              }}
              style={{ flex: 1 }}
            >
              Delete
            </button>
          </span>
        ),
      }),
    ];
  }, [columnHelper]);

  console.log('Create cols');

  return columns;
};
