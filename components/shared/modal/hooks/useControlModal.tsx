'use client';
import { useMemo, useState } from 'react';

export const useControlModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return useMemo(
    () => ({
      isOpen,
      onClose: () => setIsOpen(false),
      onOpen: () => setIsOpen(true),
    }),
    [isOpen]
  );
};
