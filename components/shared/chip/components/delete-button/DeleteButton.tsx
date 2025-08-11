import { DeleteButtonProps } from './types';

export const DeleteButton = ({
  children,
  onDelete,
  ...props
}: DeleteButtonProps) => {
  return (
    <button {...props} onClick={onDelete}>
      {children}
    </button>
  );
};
