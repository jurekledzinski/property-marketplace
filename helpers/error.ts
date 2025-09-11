export class ApiError<T extends object> extends Error {
  payload?: T;
  success?: boolean;
  status?: number;
  constructor({
    message = 'Api error',
    payload,
    success = false,
    status,
  }: {
    message?: string;
    payload?: T;
    success?: boolean;
    status?: number;
  } = {}) {
    super(message);
    this.name = 'ApiError';
    this.payload = payload;
    this.success = success;
    this.status = status;
  }
}
