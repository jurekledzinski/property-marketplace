'use client';
import { Heading, Modal, useAdvertActions } from '@/components';
import { modalMessages } from '@/utils';
import { showSuccessToast } from '@/helpers';
import { UserAdvertsProps } from './types';

import {
  AdvertsPagination,
  AdvertsTable,
  useAdvertsColumns,
  useControlAdvertsTable,
} from './components';

export const UserAdverts = ({ adverts = [] }: UserAdvertsProps) => {
  const { description, title } = modalMessages.deleteAdvert();

  const { action, onActive, onConfirm, onDelete, onSuccess, modal } =
    useAdvertActions({
      onSuccess: () => showSuccessToast('Advert activated successfully'),
    });

  const columns = useAdvertsColumns({ onActive, onDelete });
  const controlTable = useControlAdvertsTable({ adverts, columns });

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        User adverts
      </Heading>
      <AdvertsTable
        table={controlTable.table}
        isEmpty={controlTable.isEmpty}
        noResults={controlTable.noResults}
        loading={false}
      >
        {(table) => {
          const currentPage = table.getState().pagination.pageIndex;
          const itemsPerPage = table.getState().pagination.pageSize;
          const amountData = table.getPrePaginationRowModel().rows.length;

          return (
            <AdvertsPagination
              amountData={amountData}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              table={table}
            />
          );
        }}
      </AdvertsTable>
      <Modal
        color="negative"
        confirmText="Delete"
        title="Delete advert"
        isPending={!action.state.message ? action.isPending : false}
        open={modal.isOpen}
        isSuccess={action.state.success}
        onCancel={modal.onClose}
        onClose={modal.onClose}
        onConfirm={onConfirm}
        onSuccess={onSuccess}
        portal={true}
        variant="outlined"
      >
        {title} <br />
        {description}
      </Modal>
    </>
  );
};
