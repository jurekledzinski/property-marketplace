import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';

export type ApiSuccessResponse<T> = {
  message?: string;
  payload?: T;
  success: true;
};

export type ApiErrorResponse = {
  message?: string;
  status?: number;
  success: false;
};

export interface FetchAPIProps extends RequestInit, NextFetchRequestConfig {
  url: string;
  headers?: ReadonlyHeaders;
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT';
}
