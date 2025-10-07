import { MouseEventHandler } from 'react';

export type SearchBarProps = {
  searchValue?: string;
  onChange: (id: string) => void;
  onClickEndIcon?: MouseEventHandler<HTMLSpanElement>;
};
