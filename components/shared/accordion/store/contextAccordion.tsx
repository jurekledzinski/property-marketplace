'use client';
import { createContext } from 'react';
import { ContextAccordion } from './types';

export const AccordionContext = createContext<ContextAccordion | undefined>(
  undefined
);
