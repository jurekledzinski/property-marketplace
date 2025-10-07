import { HTMLAttributes, MouseEventHandler } from 'react';
import { InputsAdvertsFilter } from '../../hooks';

export interface FiltersChipsPanelProps extends HTMLAttributes<HTMLDivElement> {
  filters: InputsAdvertsFilter;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
}
