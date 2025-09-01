export class ErrorApi<T extends object> extends Error {
  payload?: T;
  constructor(message?: string, payload?: T) {
    super(message);
    this.name = 'ErrorApi';
    this.payload = payload;
  }
}
