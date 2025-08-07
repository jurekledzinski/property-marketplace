import { ChangeEvent } from 'react';

export type OnChangeQuery = (
  e: ChangeEvent<HTMLInputElement> | string,
  key?: string
) => string | ChangeEvent<HTMLInputElement>;

export type OnClearQuery = (key: string) => void;

export type OnClearQueryAll = (keys: string[]) => void;
