import { ButtonContent, formatProps, getClassButton } from '@/components';
import { ButtonProps, LinkButtonProps } from './types';

export const Button = ({
  iconStart,
  iconEnd,
  label,
  ...props
}: ButtonProps | LinkButtonProps) => {
  const { button, rest } = formatProps(props);
  const classElement = getClassButton(button);

  if ('href' in rest) {
    return (
      <a
        aria-label="Link button"
        role="link"
        className={classElement}
        {...(button.disabled || button.isLoading ? {} : { href: rest.href })}
        {...rest}
      >
        <ButtonContent
          label={label}
          iconEnd={iconEnd}
          iconStart={iconStart}
          isLoading={button.isLoading}
          size={button.size}
        />
      </a>
    );
  }

  return (
    <button
      aria-label="Button"
      className={classElement}
      disabled={button.disabled || button.isLoading}
      {...rest}
    >
      <ButtonContent
        label={label}
        iconEnd={iconEnd}
        iconStart={iconStart}
        isLoading={button.isLoading}
        size={button.size}
      />
    </button>
  );
};
