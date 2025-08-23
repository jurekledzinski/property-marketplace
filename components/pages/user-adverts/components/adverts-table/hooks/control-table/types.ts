import { ColumnDef, RowData } from '@tanstack/table-core';

export type UseControlTableProps<T extends RowData> = {
  adverts: T[];
  columns: (ColumnDef<T, string> | ColumnDef<T, number>)[];
};
