'use client';
import { useState } from 'react';

export const useControlPopOver = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const onToggle = (id: string) => {
    setOpen((prev) => {
      const copy = { ...prev };

      const isRoot = id.startsWith('root');
      const isRootExist = Object.keys(copy).find((id) => id.startsWith('root'));

      if (isRoot && isRootExist) {
        return isRootExist !== id ? { [id]: !copy[id] } : {};
      }

      const index = Object.keys(prev).indexOf(id);
      if (index < 0) return { ...copy, [id]: !copy[id] };

      const updatedState = Object.fromEntries(
        Object.entries(copy).filter((_, i) => i < index)
      );

      return updatedState;
    });
  };

  const onClose = (id: string) => {
    setOpen((prev) => {
      const update = Object.entries(prev).filter((item) => item[0] !== id);
      return Object.fromEntries(update);
    });
  };

  const onCloseAll = () => setOpen({});

  return { open, onClose, onCloseAll, onToggle };
};
