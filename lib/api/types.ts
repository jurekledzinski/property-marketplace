import { Advert } from '@/models';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';

export interface UserAdvertsTable
  extends Pick<Advert, 'userId' | 'title' | 'type'> {
  id: string;
  stage?: string;
  actions?: string;
  createdAt?: string;
}

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
