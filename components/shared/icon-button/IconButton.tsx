import Link from 'next/link';
import { formatProps } from './utils/helpers';
import { getClassIconButton } from './utils';
import { IconButtonContent } from './components';
import { IconButtonProps, IconLinkButtonProps } from './types';

export const IconButton = ({
  icon,
  ...props
}: IconButtonProps | IconLinkButtonProps) => {
  const { button, rest } = formatProps(props);
  const classes = getClassIconButton(button);

  if ('href' in rest) {
    return (
      <Link
        aria-label="Icon link button"
        role="link"
        className={classes}
        {...(button.disabled || button.isLoading ? {} : { href: rest.href })}
        {...rest}
      >
        <IconButtonContent
          icon={icon}
          isLoading={button.isLoading}
          size={button.size}
        />
      </Link>
    );
  }

  return (
    <button
      aria-label="Icon button"
      className={classes}
      disabled={button.disabled || button.isLoading}
      {...rest}
    >
      <IconButtonContent
        icon={icon}
        isLoading={button.isLoading}
        size={button.size}
      />
    </button>
  );
};
