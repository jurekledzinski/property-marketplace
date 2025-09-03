'use client';
import { Toaster } from 'react-hot-toast';
import { ToasterProviderProps } from './types';

export const ToasterProvider = ({ mode = 'light' }: ToasterProviderProps) => {
  return (
    <Toaster
      position="top-left"
      toastOptions={{
        style: {
          borderRadius: 0,
          backgroundColor: mode === 'light' ? '#ffffff' : '#333333',
          color: mode === 'light' ? '#555555' : '#ffffff',
        },
      }}
    />
  );
};
