'use client';
import { useEffect, useState } from 'react';

// Prevent rendering until after mount to avoid SSR issues with document

export const useCheckMount = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted;
};
