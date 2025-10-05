import { formatDateLocalString, optionsFormatDate1 } from '@/utils-client';
import { MessageAccordionProps } from './types';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionSelect,
  AccordionInfo,
} from '@/components';

export const MessageAccordion = ({
  message,
  openIds,
  onClick,
  onSelect,
}: MessageAccordionProps) => {
  if (!message || !message.id) return null;
  const date = formatDateLocalString({
    date: message?.createdAt,
    options: optionsFormatDate1,
  });

  return (
    <Accordion
      color="primary"
      id={message.id!}
      onClick={onClick}
      open={openIds.includes(message.id)}
      variant="contained"
    >
      <AccordionHeader p="p-sm">
        <AccordionInfo title={message.title} text={date} />
        <AccordionIcon />
        <AccordionSelect onSelect={onSelect} />
      </AccordionHeader>
      <AccordionContent p="p-sm">{message.message}</AccordionContent>
    </Accordion>
  );
};
