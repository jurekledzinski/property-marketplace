import { ChangeEvent } from 'react';

export type UpdateQuery = (
  query: URLSearchParams,
  e: ChangeEvent<HTMLInputElement> | string | string[],
  key: string
) => URLSearchParams;

export type OnClearQuery = (key: string) => void;

export type OnClearQueryAll = (keys: string[]) => void;

export type SetQuery = (
  value: string | string[],
  key: string,
  query: URLSearchParams,
  encoded: string
) => URLSearchParams;
