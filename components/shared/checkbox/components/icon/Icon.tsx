import { IconProps } from './types';

export const Icon = ({ className }: IconProps) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
  );
};
