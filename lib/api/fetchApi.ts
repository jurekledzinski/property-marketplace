import { ApiErrorResponse, ApiSuccessResponse, FetchAPIProps } from './types';
import { fetchResponse } from '@/helpers';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { tryCatchApi } from '../../helpers/tryCatch';

function formatHeaders(headers?: ReadonlyHeaders) {
  const formattedHeader =
    process.env.NODE_ENV === 'development'
      ? headers
      : headers
      ? Object.fromEntries(Array.from(headers.entries()))
      : {};

  return formattedHeader;
}

export const fetchApi = async <T extends object>({
  url,
  method = 'GET',
  body,
  credentials,
  tags,
  headers,
  revalidate,
  cache,
}: FetchAPIProps): Promise<ApiSuccessResponse<T> | ApiErrorResponse> => {
  const formattedHeaders = formatHeaders(headers);

  const baseHeaders = {
    'Content-Type': 'application/json',
  };

  const options: RequestInit = {
    method,
  };

  if (formattedHeaders) options['headers'] = formattedHeaders;
  if (!formattedHeaders) options['headers'] = baseHeaders;
  if (body) options['body'] = body;
  if (credentials) options['credentials'] = credentials;
  if (revalidate || tags) options['next'] = { tags, revalidate };
  if (cache) options['cache'] = cache;

  return await tryCatchApi({
    promise: fetch(url, options),
    reponse: fetchResponse,
  });
};
