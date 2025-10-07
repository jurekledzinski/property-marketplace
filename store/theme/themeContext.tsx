'use client';
import { ContextTheme } from './types';
import { createContext } from 'react';

export const ThemeContext = createContext<ContextTheme | undefined>(undefined);
