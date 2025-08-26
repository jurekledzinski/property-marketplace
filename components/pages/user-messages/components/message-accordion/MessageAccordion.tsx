import { Accordion, AccordionContent, AccordionHeader } from '@/components';
import { MessageAccordionProps } from './types';
import styles from '../../UserMessages.module.css';

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
          {new Date(message.createdAt).toLocaleString('en-GB', {
            timeZone: 'UTC',
          })}
        </span>
      </AccordionHeader>
      <AccordionContent active={selectedIds.includes(message.id)} pt={'pt-sm'}>
        {message.description}
      </AccordionContent>
    </Accordion>
  );
};
