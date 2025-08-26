import { NextResponse } from 'next/server';

//before errorMessage used in routes api

export const errorResponseApi = (status: number, statusText?: string) => {
  return NextResponse.json({}, { status, statusText });
};
