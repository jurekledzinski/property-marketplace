'use client';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from '../../Select.module.css';
import { SelectListProps } from './types';
import { useAriaAttributes, useSetKeyMap } from '@/hooks';
import { usePopOver } from '@/components';

export const SelectList = forwardRef<HTMLDivElement, SelectListProps>(
  ({ children }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    const a11y = useAriaAttributes().selectListA11y();
    const { onDeleteKey, onSetKey } = usePopOver();

    useImperativeHandle(ref, () => localRef.current!, []);

    const setKeyMap = useSetKeyMap({
      id: 'root',
      onDeleteKey,
      onSetKey,
      ref: localRef,
    });

    return (
      <div {...a11y} ref={setKeyMap} className={styles.selectList}>
        {children}
      </div>
    );
  }
);

SelectList.displayName = 'SelectList';
