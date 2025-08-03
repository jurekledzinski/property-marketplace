import { HeadingProps } from '../types';

type Props = 'className' | 'fw' | 'level' | 'margin' | 'padding';
type Params = Pick<HeadingProps, Props>;

export type ClassesHeading = (params: Params) => string;
