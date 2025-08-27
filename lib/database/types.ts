export type State<T> = {
  message: string;
  success: boolean;
  payload?: T;
};

export type DataDB<T> = T & {
  _id: string;
};
