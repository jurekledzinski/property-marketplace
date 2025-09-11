import { ApiError } from './error';
import { ApiErrorResponse, ApiSuccessResponse } from '@/lib';
import { tryCatchApi } from './tryCatch';

export const fetchResponse = async (response: Response) => {
  const data = await response.json();

  if (!response.ok) {
    const error = new ApiError();
    error.message = data?.message ?? response.statusText;
    error.success = false;
    throw error;
  }

  return data;
};

export interface FetchAPIClientProps extends RequestInit {
  url: string;
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT' | 'PATCH';
}

export const fetchApiClient = async <T extends object>({
  url,
  method = 'GET',
  body,
  credentials,
  headers,
}: FetchAPIClientProps): Promise<ApiSuccessResponse<T> | ApiErrorResponse> => {
  const options: RequestInit = {
    method,
    headers,
  };

  if (body) options['body'] = body;
  if (credentials) options['credentials'] = credentials;

  return await tryCatchApi({
    promise: fetch(url, options),
    reponse: fetchResponse,
  });
};
