import { HTMLProps } from 'react';
import { Table } from '@tanstack/react-table';

export interface TableHeaderProps<T>
  extends HTMLProps<HTMLTableSectionElement> {
  table: Table<T>;
}
