export type State<T> = {
  message: string;
  success: boolean;
  payload?: T;
};
