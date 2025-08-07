'use client';
import styles from './SortSelector.module.css';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { SortSelectorProps } from './types';

import {
  Icon,
  Select,
  SelectList,
  SelectOption,
  SelectPanel,
  SelectTrigger,
} from '@/components';
import { useMemo } from 'react';

export const SortSelector = ({ onChange, sortValue }: SortSelectorProps) => {
  const value = useMemo(() => sortValue ?? '', [sortValue]);

  return (
    <Select value={value} onChange={onChange}>
      <SelectTrigger placeholder="Sort adverts" />
      <SelectPanel>
        <SelectList>
          <SelectOption id="">Default</SelectOption>
          <SelectOption id="ascending">
            <span className={styles.option}>
              <Icon icon={faArrowUp} />
              <span>Adverts sort ascending</span>
            </span>
          </SelectOption>
          <SelectOption id="descending">
            <span className={styles.option}>
              <Icon icon={faArrowDown} />
              <span>Adverts sort descending</span>
            </span>
          </SelectOption>
        </SelectList>
      </SelectPanel>
    </Select>
  );
};
