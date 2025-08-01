import { BoxProps } from './types';

export const Box = ({ className, children, ...props }: BoxProps) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};
