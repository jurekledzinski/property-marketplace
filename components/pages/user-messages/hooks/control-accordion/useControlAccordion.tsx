'use client';
import { useState } from 'react';
import type { ChangeEvent, MouseEvent } from 'react';

export const useControlAccordion = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleDelete = (e: ChangeEvent<HTMLInputElement>) => {
    const id = (e.target as HTMLInputElement).id;
  };

  const handleSelect = (e: MouseEvent<HTMLInputElement>) => {
    const id = (e.target as HTMLInputElement).id;
    setSelectedIds((prev) => {
      if (prev.includes(id)) return [...prev].filter((i) => i !== id);
      return [...prev, id];
    });
  };

  return { selectedIds, handleSelect, handleDelete };
};
