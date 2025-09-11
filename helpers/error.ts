export class ApiError<T extends object> extends Error {
  payload?: T;
  success?: boolean;
  constructor(message?: string, payload?: T, success?: boolean) {
    super(message);
    this.name = 'ApiError';
    this.payload = payload;
    this.success = success;
  }
}
