'use client';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SearchBarProps } from './types';
import { SearchInput } from '@/components';
import { useEffect, useState } from 'react';

export const SearchBar = ({
  onClickEndIcon,
  onChange,
  searchValue,
}: SearchBarProps) => {
  const [state, setState] = useState(searchValue ?? '');
  useEffect(() => setState(searchValue ?? ''), [searchValue]);

  return (
    <SearchInput
      {...(state === '' ? {} : { endIcon: [faXmark] })}
      startIcon={[faMagnifyingGlass]}
      onChange={(e) => {
        onChange(e.target.value);
        setState(e.target.value);
      }}
      placeholder="Search"
      value={state}
      onClickEndIcon={onClickEndIcon}
    />
  );
};
