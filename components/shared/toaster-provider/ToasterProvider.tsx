'use client';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '@/store';

export const ToasterProvider = () => {
  const context = useTheme();

  return (
    <Toaster
      position="top-left"
      toastOptions={{
        style: {
          borderRadius: 0,
          backgroundColor: context.mode === 'light' ? '#ffffff' : '#333333',
          color: context.mode === 'light' ? '#555555' : '#ffffff',
        },
      }}
    />
  );
};
