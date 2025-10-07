'use client';
import { ContextDrawer } from './types';
import { createContext } from 'react';

export const DrawerContext = createContext<ContextDrawer | undefined>(
  undefined
);
