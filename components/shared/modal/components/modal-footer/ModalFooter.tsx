import { Button } from '@/components';
import { modalFooterClassNames } from '@/components/shared/modal';
import { ModalFooterProps } from './types';

export const ModalFooter = ({
  cancelText,
  confirmText,
  isPending,
  onCancel,
  onConfirm,
  type,
  color,
}: ModalFooterProps) => {
  const classes = modalFooterClassNames();

  return (
    <footer className={classes.footer}>
      <Button
        label={cancelText!}
        variant="outlined"
        color="secondary"
        onClick={onCancel}
        size="size-xs"
      />

      <Button
        label={confirmText}
        variant="contained"
        color={color}
        onClick={onConfirm}
        type={type}
        size="size-xs"
        isLoading={isPending}
      />
    </footer>
  );
};
