import { BoxProps } from '../types';
import { CSSProperties } from 'react';

type Params = Omit<BoxProps, 'children'>;

export type ClassesBox = (params: Params) => string;

export type GetInlineBoxStyles = (params: Params) => CSSProperties;
