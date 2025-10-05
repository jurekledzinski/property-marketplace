'use client';
import { classNames } from '@/utils-client';
import { dropZoneClassNames } from './utils/classNames';
import { DropZoneProps } from './types';
import { forwardRef, useImperativeHandle } from 'react';
import { useControlDrop, useDropZone } from './hooks';

export const DropZone = forwardRef<HTMLDivElement, DropZoneProps>(
  ({ children, className, title, onDrop }, ref) => {
    const { isEnter, refZone, onEnter, onLeave } = useDropZone();
    const { onDragEnter, onDragOver, onDragLeave } = useControlDrop({
      isEnter,
      onEnter,
      onLeave,
      refZone,
    });

    useImperativeHandle(ref, () => refZone.current!);

    const classes = dropZoneClassNames(isEnter);

    return (
      <div
        className={classNames(classes.zone, className)}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onDropCapture={() => onLeave()}
        ref={refZone}
      >
        <h4 className={classes.title}>{title}</h4>
        {children}
      </div>
    );
  }
);

DropZone.displayName = 'DropZone';
