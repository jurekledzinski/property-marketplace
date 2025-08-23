import { ColumnsFilterBodyProps } from './types';
import { flexRender } from '@tanstack/react-table';

export const ColumnsFilterBody = <T extends object>({
  row,
}: ColumnsFilterBodyProps<T>) => {
  return (
    <>
      {row
        ? row.getVisibleCells().map((cell) => {
            return (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            );
          })
        : null}
    </>
  );
};
