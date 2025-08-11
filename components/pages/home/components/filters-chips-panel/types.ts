import { HTMLAttributes } from 'react';
import { PartialAdvertsFilters } from '../../types';

export interface FiltersChipsPanelProps extends HTMLAttributes<HTMLDivElement> {
  filters: PartialAdvertsFilters;
}
