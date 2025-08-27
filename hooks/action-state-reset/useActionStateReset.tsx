'use client';
import { startTransition, useActionState, useCallback, useEffect } from 'react';
import { useActionStateResetProps } from './types';

export const initialState = {
  message: '',
  success: false,
};

export const useActionStateReset = <T extends object>({
  onResetAction,
  fnAction,
  autoReset,
}: useActionStateResetProps<T>) => {
  const [state, formAction, isPending] = useActionState(
    async (state: unknown, payload: FormData | null) => {
      if (payload === null) return initialState;

      try {
        return await fnAction(state, payload);
      } catch {
        return { message: 'An error occurred', success: false };
      }
    },
    initialState
  );

  const resetStateAction = useCallback(
    (formData?: FormData) => {
      startTransition(() => {
        formAction(formData || null);
        if (onResetAction) onResetAction();
      });
    },
    [formAction, onResetAction]
  );

  useEffect(() => {
    if (autoReset && state.success && !isPending) resetStateAction();
  }, [autoReset, state, isPending, resetStateAction]);

  return {
    state,
    formAction,
    isPending,
    resetStateAction,
  };
};
