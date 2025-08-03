import React, { HTMLAttributes } from 'react';

export interface DropZoneProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
}

export type UseControlDropProps = {
  isEnter: boolean;
  onEnter: () => void;
  onLeave: () => void;
  refZone: React.RefObject<HTMLDivElement | null>;
};

export type Event = React.DragEvent<HTMLDivElement>;
