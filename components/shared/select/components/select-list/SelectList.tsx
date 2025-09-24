'use client';
import React, { forwardRef } from 'react';
import styles from '../../Select.module.css';
import { SelectListProps } from './types';
import { useAriaAttributes } from '@/hooks';

export const SelectList = forwardRef<HTMLDivElement, SelectListProps>(
  ({ children }, ref) => {
    const a11y = useAriaAttributes().selectListA11y();

    return (
      <div {...a11y} ref={ref} className={styles.selectList}>
        {children}
      </div>
    );
  }
);

SelectList.displayName = 'SelectList';
