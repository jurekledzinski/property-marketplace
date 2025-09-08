import { ApiErrorResponse, ApiSuccessResponse } from '../lib/api/types';

export const tryCatchApi = async <T extends object = object>({
  promise,
  reponse,
}: {
  promise: Promise<Response>;
  reponse: (
    response: Response
  ) => Promise<ApiSuccessResponse<T> | ApiErrorResponse>;
}): Promise<ApiSuccessResponse<T> | ApiErrorResponse> => {
  try {
    const res = await promise;
    return await reponse(res);
  } catch {
    return { message: 'Something went wrong!', success: false };
  }
};
