'use client';
import { useEffect, useState } from 'react';

export const useBackgroundImageLoaded = (src: string) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);

  return imageLoaded;
};
