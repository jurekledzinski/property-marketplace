import { ContainerProps } from '../types';
import { CSSProperties } from 'react';

type Params = Omit<ContainerProps, 'as' | 'children'>;

export type ClassesContainer = (params: Params) => string;

export type GetInlineContainerStyles = (params: Params) => CSSProperties;
