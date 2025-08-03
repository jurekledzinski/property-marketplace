import { useEffect, useMemo, useRef } from 'react';

export const useObjectUrl = (file: File) => {
  const previousUrlRef = useRef<string | null>(null);

  const objectUrl = useMemo(() => URL.createObjectURL(file), [file]);

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
