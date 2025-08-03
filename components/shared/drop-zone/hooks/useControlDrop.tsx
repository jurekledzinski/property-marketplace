import { Event, UseControlDropProps } from '../types';

export const useControlDrop = ({
  isEnter,
  onEnter,
  onLeave,
  refZone,
}: UseControlDropProps) => {
  const onDragOver = (e: Event) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (!isEnter) onEnter();
  };

  const onDragEnter = (e: Event) => e.preventDefault();

  const onDragLeave = (e: Event) => {
    e.preventDefault();
    if (!refZone.current) return;
    if (!refZone.current.contains(e.relatedTarget as Node | null)) onLeave();
  };

  return { onDragEnter, onDragLeave, onDragOver };
};
