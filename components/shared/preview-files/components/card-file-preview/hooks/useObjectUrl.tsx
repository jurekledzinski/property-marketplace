import { useEffect, useMemo, useRef } from 'react';

export const useObjectUrl = (file: File | string) => {
  const previousUrlRef = useRef<string | null>(null);

  const objectUrl = useMemo(() => {
    return typeof file === 'string' ? null : URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    if (previousUrlRef.current !== objectUrl) {
      previousUrlRef.current = objectUrl;
      return;
    }

    const copy = previousUrlRef.current;
    if (!copy) return;

    return () => URL.revokeObjectURL(copy);
  }, [objectUrl]);

  return objectUrl;
};
