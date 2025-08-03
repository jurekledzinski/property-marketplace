import { createContext } from 'react';
import { ContextPopOver } from './types';

export const PopOverContext = createContext<ContextPopOver | undefined>(
  undefined
);
