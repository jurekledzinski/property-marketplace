export type ActionState<T> = {
  message: string;
  success?: boolean;
  payload?: T;
};
