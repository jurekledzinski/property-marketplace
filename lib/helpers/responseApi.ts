import { NextResponse } from 'next/server';

//before errorMessage used in routes api

export const errorResponseApi = ({
  message,
  status,
}: {
  message?: string;
  status?: number;
}) => {
  return NextResponse.json(
    { ...(message !== undefined && { message }) },
    { ...(status !== undefined && { status }) }
  );
};

export const successResponseApi = <T extends object>({
  message,
  payload,
  status,
  success,
}: {
  message?: string;
  payload?: T;
  status?: number;
  success?: boolean;
}) => {
  return NextResponse.json(
    {
      ...(message !== undefined && { message }),
      ...(payload !== undefined && { payload }),
      ...(success !== undefined && { success }),
    },
    { ...(status && { status }) }
  );
};
