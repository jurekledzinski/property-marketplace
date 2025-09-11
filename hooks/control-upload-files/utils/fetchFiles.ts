import { ApiError } from '@/helpers';
import { PayloadUpload, ResponseApi } from '../types';

type Methods = 'DELETE' | 'POST';

export const fetchFiles = (url: string, method: Methods, body: FormData) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_URL;

  return fetch(`${domain}${url}`, {
    method,
    cache: 'no-cache',
    body,
  });
};

export const fetchFilesResponse = async (response: Promise<Response>) => {
  const result = await response;

  if (!result.ok) {
    const body = await result.json();
    const error = new ApiError();
    error.payload = body.payload;
    throw error;
  }

  const data = (await result.json()) as ResponseApi<PayloadUpload>;

  return { success: true, payload: data.payload };
};

export const fetchFilesFailed = (
  error: Error
): Promise<ResponseApi<PayloadUpload>> => {
  if (error instanceof ApiError) {
    return Promise.reject({ success: false, payload: error.payload });
  }

  return Promise.reject({
    success: false,
    payload: null,
  });
};
