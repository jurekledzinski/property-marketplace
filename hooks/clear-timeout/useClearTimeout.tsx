'use client';
import { useEffect, useRef } from 'react';

export const useClearTimeout = () => {
  const timeId = useRef<NodeJS.Timeout | number>(null);

  const handleCleanTimeout = () => {
    if (timeId.current) clearTimeout(timeId.current);
  };

  useEffect(() => {
    const copyTimeoutId = timeId.current;

    return () => {
      if (copyTimeoutId) clearTimeout(copyTimeoutId);
    };
  }, []);

  return { handleCleanTimeout, timeId };
};
