export class ErrorApi<T extends object> extends Error {
  payload?: T;
  success?: boolean;
  constructor(message?: string, payload?: T, success?: boolean) {
    super(message);
    this.name = 'ErrorApi';
    this.payload = payload;
    this.success = success;
  }
}
