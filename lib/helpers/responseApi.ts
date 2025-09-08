import { NextResponse } from 'next/server';

//before errorMessage used in routes api

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
