import { OnChangeQuery } from '@/hooks';
import { MouseEventHandler } from 'react';

export type SearchBarProps = {
  searchValue?: string;
  onChange: OnChangeQuery;
  onClickEndIcon?: MouseEventHandler<HTMLSpanElement>;
};
