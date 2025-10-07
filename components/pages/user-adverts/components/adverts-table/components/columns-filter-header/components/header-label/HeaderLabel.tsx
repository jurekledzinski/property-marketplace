import { flexRender } from '@tanstack/react-table';
import { HeaderLabelProps } from './types';

export const HeaderLabel = <T extends object>({
  header,
}: HeaderLabelProps<T>) => {
  return (
    <span>
      {flexRender(header.column.columnDef.header, header.getContext())}
    </span>
  );
};
