'use client';
import { createContext } from 'react';
import { ContextMenu } from './types';

export const MenuContext = createContext<ContextMenu | undefined>(undefined);
