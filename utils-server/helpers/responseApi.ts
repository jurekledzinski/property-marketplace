import { ApiError } from '@/utils-client';
import { NextResponse } from 'next/server';

type Params<T extends object> = {
  message?: string;
  status?: number;
  payload?: T;
  success?: boolean;
};

const commonResponseApi = <T extends object>({
  message,
  payload,
  status,
  success,
}: Params<T>) => {
  return NextResponse.json(
    {
      ...(message !== undefined && { message }),
      ...(payload !== undefined && { payload }),
      ...(success !== undefined && { success }),
    },
    { ...(status !== undefined && { status }) }
  );
};

export const errorResponseApi = <T extends object>(params: Params<T>) => {
  return commonResponseApi({ ...params, success: false });
};

export const successResponseApi = <T extends object>(params: Params<T>) => {
  return commonResponseApi({ ...params, success: true });
};

// For future improvements
export const throwApiError = <T extends object>({
  message,
  payload,
  status,
  success,
}: {
  message?: string;
  payload?: T;
  status?: number;
  success?: boolean;
} = {}) => {
  throw new ApiError({ message, payload, status, success });
};
