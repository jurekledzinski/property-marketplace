'use client';
import { createContext } from 'react';
import { ContextSelect } from './types';

export const SelectContext = createContext<ContextSelect | undefined>(
  undefined
);
