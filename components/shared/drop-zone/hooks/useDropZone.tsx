'use client';
import { useEffect, useRef, useState } from 'react';

export const useDropZone = () => {
  const refZone = useRef<HTMLDivElement>(null);
  const [isEnter, setIsEnter] = useState(false);

  useEffect(() => {
    window.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });

    window.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }, []);

  return {
    isEnter,
    refZone,
    onEnter: () => setIsEnter(true),
    onLeave: () => setIsEnter(false),
  };
};
