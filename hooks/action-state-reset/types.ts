import { ActionState } from '@/lib';

export type useActionStateResetProps<T> = {
  fnAction: (prevState: unknown, formData: FormData) => Promise<ActionState<T>>;
  autoReset?: boolean;
  onResetAction?: () => void;
};
