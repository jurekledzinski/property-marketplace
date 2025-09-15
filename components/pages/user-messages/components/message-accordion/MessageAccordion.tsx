import styles from '../../UserMessages.module.css';
import { Accordion, AccordionContent, AccordionHeader } from '@/components';
import { formatDateLocalString } from '@/helpers';
import { MessageAccordionProps } from './types';

export const MessageAccordion = ({
  message,
  selectedIds,
  onClick,
  onChangeDelete,
}: MessageAccordionProps) => {
  if (!message || !message.id) return null;

  return (
    <Accordion key={message.id} color="success" variant="contained">
      <AccordionHeader
        p={'p-sm'}
        id={message.id!}
        checked={selectedIds.includes(message.id)}
        title={message.title}
        onClick={onClick}
        onChangeDelete={onChangeDelete}
      >
        <span className={styles.date}>
          {formatDateLocalString({
            date: message?.createdAt,
            options: { dateStyle: 'full', timeStyle: 'medium' },
          })}
        </span>
      </AccordionHeader>
      <AccordionContent active={selectedIds.includes(message.id)} pt={'pt-sm'}>
        {message.message}
      </AccordionContent>
    </Accordion>
  );
};
