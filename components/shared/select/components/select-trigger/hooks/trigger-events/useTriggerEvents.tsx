import { KeyboardEvent, MouseEvent } from 'react';
import { UseTriggerEvents } from './types';

export const useTriggerEvents = ({ onToggle }: UseTriggerEvents) => {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (onToggle) onToggle('root');
    }
  };

  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (onToggle) onToggle('root');
  };

  return { onClick, onKeyDown };
};
