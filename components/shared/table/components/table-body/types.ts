import { HTMLProps } from 'react';
import { Table } from '@tanstack/react-table';

export interface TableBodyProps<T> extends HTMLProps<HTMLTableSectionElement> {
  table: Table<T>;
}
