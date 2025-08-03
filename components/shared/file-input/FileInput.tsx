import { Button } from '@/components';
import { FileInputProps } from './types';
import { forwardRef } from 'react';
import { getFileInputProps } from './utils';
import { useImperativeHandle, useRef } from 'react';

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ disabled, ...props }, ref) => {
    const refInput = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => refInput.current!);

    const { buttonProps, inputProps } = getFileInputProps(props);

    return (
      <>
        <Button
          onClick={() => refInput.current?.click()}
          disabled={disabled}
          type="button"
          {...buttonProps}
        />
        <input
          disabled={disabled}
          ref={refInput}
          id="file"
          type="file"
          hidden={true}
          {...inputProps}
        />
      </>
    );
  }
);

FileInput.displayName = 'FileInput';
