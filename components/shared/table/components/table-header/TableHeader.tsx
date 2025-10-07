import { Children, cloneElement, isValidElement } from 'react';
import { HeaderGroup } from '@tanstack/react-table';
import { TableHeaderProps } from './types';

export const TableHeader = <T extends object>({
  children,
  table,
}: TableHeaderProps<T>) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {Children.map(
            children,
            (child) =>
              isValidElement<{ headerGroup: HeaderGroup<T> }>(child) &&
              cloneElement(child, { headerGroup })
          )}
        </tr>
      ))}
    </thead>
  );
};
