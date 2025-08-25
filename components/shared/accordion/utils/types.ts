import { AccordionContentProps } from '../components';
import { AccordionProps } from '../types';
import {
  PaddingBottomToken,
  PaddingLeftToken,
  PaddingRightToken,
  PaddingToken,
  PaddingTopToken,
} from '@/types';

interface ParamsAccordionHeader extends Omit<AccordionProps, 'children'> {
  p?: PaddingToken;
}

interface ParamsAccordionContent
  extends Omit<AccordionContentProps, 'active' | 'children' | 'className'> {
  p?: PaddingToken;
  pt?: PaddingTopToken;
  pb?: PaddingBottomToken;
  pl?: PaddingLeftToken;
  pr?: PaddingRightToken;
}

export type ClassesAccordionHeader = (params: ParamsAccordionHeader) => {
  checkbox?: string;
  header: string;
};

export type ClassesAccordionContent = (params: ParamsAccordionContent) => {
  content: string;
  inner: string;
};
