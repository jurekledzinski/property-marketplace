'use client';
import styles from './SortSelector.module.css';
import { options } from './utils';
import { SortSelectorProps } from './types';
import { useMemo } from 'react';

import {
  Icon,
  Select,
  SelectList,
  SelectOption,
  SelectPanel,
  SelectTrigger,
} from '@/components';

export const SortSelector = ({ onChange, sortValue }: SortSelectorProps) => {
  const value = useMemo(() => sortValue || '', [sortValue]);
  const formatOptions = useMemo(
    () =>
      options.map((option) => ({
        key: option.id,
        value: option.label,
      })),
    []
  );

  return (
    <Select
      closeOnScroll
      value={value}
      onChange={onChange}
      options={formatOptions}
    >
      <SelectTrigger placeholder="Sort adverts" />
      <SelectPanel>
        <SelectList>
          {options.map(({ id, label, icon }) => (
            <SelectOption key={id} value={{ key: id }}>
              <span className={styles.option}>
                {icon && <Icon icon={icon} />}
                <span>{label}</span>
              </span>
            </SelectOption>
          ))}
        </SelectList>
      </SelectPanel>
    </Select>
  );
};
