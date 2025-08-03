import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@/components';
import { modalHeaderClassNames } from '../../utils/classNames';
import { ModalHeaderProps } from './types';

export const ModalHeader = ({ title, onClose, variant }: ModalHeaderProps) => {
  const classes = modalHeaderClassNames(variant!);

  return (
    <header className={classes.header}>
      <h3 className={classes.title}>{title}</h3>
      <IconButton
        icon={[faXmark]}
        color={variant}
        onClick={onClose}
        size="size-xxs"
        variant="contained"
        contrast={true}
      />
    </header>
  );
};
