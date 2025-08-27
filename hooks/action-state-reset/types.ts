import { State } from '@/lib';

export type useActionStateResetProps<T> = {
  onResetAction?: () => void;
  fnAction: (prevState: unknown, formData: FormData) => Promise<State<T>>;
  autoReset?: boolean;
};
