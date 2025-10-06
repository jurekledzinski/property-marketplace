'use client';
import { selectAccordion } from './utils';
import { useState } from 'react';
import type { ChangeEvent, MouseEvent } from 'react';

export const useControlAccordion = () => {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [deleteIds, setDeleteIds] = useState<string[]>([]);

  const handleDelete = (e: ChangeEvent<HTMLInputElement>) => {
    const id = (e.target as HTMLInputElement).id.replace('select-', '');
    setDeleteIds((prev) => selectAccordion(prev, id));
  };

  const handleSelect = (e: MouseEvent<HTMLDivElement>) => {
    const id = (e.currentTarget as HTMLDivElement).id;
    setOpenIds((prev) => selectAccordion(prev, id));
  };

  const handleClearDeleteIds = () => setDeleteIds([]);

  return {
    deleteIds,
    openIds,
    handleSelect,
    handleClearDeleteIds,
    handleDelete,
  };
};
